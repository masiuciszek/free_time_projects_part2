import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const [_, __, arg] = process.argv;

  const handleArgument = async (arg: string) => {
    switch (arg) {
      case "drop-all":
        await prisma.user.deleteMany();
        await prisma.dish.deleteMany();
        await prisma.comment.deleteMany();
        break;
      case "seed-data":
        await prisma.user.create({
          data: { firstName: "bob", lastName: "smith", password: "123456", email: "bob@io.com" },
        });
        await prisma.dish.create({
          data: {
            title: "sushi-red",
            dishType: "STARTER",
            rating: 4,
          },
        });
        await prisma.dish.create({
          data: {
            title: "sushi-blue",
            dishType: "MAIN",
            rating: 3,
          },
        });
        await prisma.dish.create({
          data: {
            title: "sushi-alecarte",
            dishType: "DESSERT",
            rating: 2,
          },
        });
        break;
      case "drop-users":
        await prisma.user.deleteMany();
        break;
      case "drop-comments":
        await prisma.comment.deleteMany();
        break;
      case "drop-dishes":
        await prisma.dish.deleteMany();
        break;
      default:
        console.log("no valid argument");
        break;
    }
  };

  if (arg) {
    await handleArgument(arg);
  }
  // await prisma.dish.findMany()
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
