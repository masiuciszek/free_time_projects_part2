export const isOk = <T>(p: Promise<T>) => {
  return p.then(data => ({ ok: true, data })).catch(err => Promise.resolve({ ok: false, err }));
};

export function to<T, U = Error>(
  promise: Promise<T>,
  errorObject?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorObject) {
        Object.assign(err, errorObject);
      }
      return [err, undefined];
    });
}
