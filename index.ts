import type { BunRequest } from "bun";
import { Resend } from "resend";
import {
  EmailVerification,
  type EmailVerificationProps,
} from "./emails/email-verification";
import { sendEmail } from "./handlers/send-email";
import {
  ResetPassword,
  type ResetPasswordProps,
} from "./emails/reset-password";
import { getProps } from "./helpers/get-props";

const server = Bun.serve({
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  hostname: "0.0.0.0",
  routes: {
    "api/v1/send-verification-email": {
      POST: async (req) => {
        const { email, name, redirectUrl } =
          await getProps<EmailVerificationProps>(req);

        return await sendEmail({
          to: email,
          subject: "Verify your email to start using FakeBot!",
          react: EmailVerification({
            name: name,
            redirectUrl: redirectUrl,
          }),
        });
      },
    },
    "api/v1/send-reset-password-email": {
      POST: async (req) => {
        const { email, name, resetPasswordUrl } =
          await getProps<ResetPasswordProps>(req);

        return await sendEmail({
          to: email,
          subject: "Reset your password",
          react: ResetPassword({
            name: name,
            resetPasswordUrl: resetPasswordUrl,
          }),
        });
      },
    },
  },
});

console.log(`Server is running on ${server.url}`);
