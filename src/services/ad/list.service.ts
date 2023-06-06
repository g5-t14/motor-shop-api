import { prisma } from "../../server";

export async function listAllService() {
  const ads = prisma.ads.findMany();

  return ads;
}
