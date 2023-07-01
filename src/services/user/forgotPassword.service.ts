import { v4 as uuidv4 } from 'uuid';
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import { emailService } from "../../utils/sendMail.utils";

export const forgotPasswordService = async (email: string): Promise<void> => {
  const user = await prisma.users.findFirst({
    where: { email },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const resetToken: string = uuidv4();

  await prisma.users.update({
    where: { email },
    data: { reset_password: resetToken },
  });

  const resetPasswordTemplate = emailService.resetPasswordTemplate(
    user.name,
    email,
    resetToken
  );

  await emailService.sendEmail(resetPasswordTemplate);
};
