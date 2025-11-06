import * as React from "react";
import {
  Html,
  Button,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

export interface ResetPasswordProps {
  name: string;
  resetPasswordUrl: string;
  token?: string;
}

export function ResetPassword({ name, resetPasswordUrl }: ResetPasswordProps) {
  return (
    <Html lang="en">
      <Body>
        <Container>
          <Heading as="h1">Hi {name},</Heading>
          <Text>
            We've received a request to reset your password. Please click the
            button below to reset your password:
          </Text>
          <Button href={resetPasswordUrl}>Reset Password</Button>
        </Container>
        <Text>
          If you didn't request this password reset, please ignore this email.
        </Text>
        <Text>
          If you need help, please contact our support team at{" "}
          <a href="mailto:support@fakebot.com">support@fakebot.com</a>.
        </Text>
      </Body>
    </Html>
  );
}
