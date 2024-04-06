import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "9328582c-d1cd-415e-a379-e57082046115",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um eevento p/ devs apaixonado(as) por código",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
