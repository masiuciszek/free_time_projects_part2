export const isOk = <T>(p: Promise<T>) => {
  return p.then(data => ({ ok: true, data })).catch(err => Promise.resolve({ ok: false, err }));
};
