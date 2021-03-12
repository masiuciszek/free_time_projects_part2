const dishes = [
  { name: "foo", dishType: "STARTER" },
  { name: "foo", dishType: "STARTER" },
  { name: "foo", dishType: "STARTER" },
  { name: "foo", dishType: "STARTER" },
  { name: "foo", dishType: "STARTER" },
];

const resolvers = {
  Query: {
    foo: () => "hello",
    allDishes: () => dishes,
  },
};

export { resolvers };
