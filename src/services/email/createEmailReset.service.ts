import { randomUUID } from "node:crypto";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import { emailService } from "../../utils/sendMail.utils";

export const sendEmailResetPassword = async (email: string) => {
  const user = await prisma.users.findFirst({
    where: { email },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const resetToken = randomUUID();

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
