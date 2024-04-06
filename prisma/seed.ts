import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "9e9bd979-9d10-4915-b339-3786bl634f33",
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
