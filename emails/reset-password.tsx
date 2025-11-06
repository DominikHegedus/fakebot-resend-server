import * as React from "react";
import {
  Html,
  Button,
  Body,
  Container,
  Heading,
  Text,
  Link,
} from "@react-email/components";
import StyleContainer from "./shared/style-container";
import Navigation from "./shared/button";

export interface ResetPasswordProps {
  name: string;
  redirectUrl: string;
  token?: string;
}

export function ResetPassword({ name, redirectUrl }: ResetPasswordProps) {
  return (
    <StyleContainer>
      <Container>
        <Heading as="h1">Hi {name ?? "there"},</Heading>
        <Text>
          We've received a request to reset your password. Please click the
          button below to reset your password:
        </Text>
        <Navigation href={redirectUrl ?? ""}>Reset Password</Navigation>
        <Text>
          If you didn't request this password reset, please ignore this email.
        </Text>
        <Text>
          If you need help, please contact our support team at{" "}
          <Link href="mailto:support@fakebot.com">support@fakebot.com</Link>.
        </Text>
      </Container>
    </StyleContainer>
  );
}

export default ResetPassword;
