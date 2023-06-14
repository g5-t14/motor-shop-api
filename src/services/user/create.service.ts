import { prisma } from "../../server";
import { Users } from "@prisma/client";
import { TUserRequestWithColor, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (data: TUserRequestWithColor): Promise<TUserResponse> => {
  const colors = [
    "#E34D8C",
    "#C04277",
    "#7D2A4D",
    "#7000FF",
    "#6200E3",
    "#36007D",
    "#349974",
    "#2A7D5F",
    "#153D2E",
    "#6100FF",
    "#5700E3",
    "#30007D",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  data.user_color = colors[randomIndex];
  const user: Users = await prisma.users.create({ data });

  return userSchemaResponse.parse(user);
};
