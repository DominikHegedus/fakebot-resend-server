import * as React from "react";
import {
  Html,
  Button,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

export interface EmailVerificationProps {
  name: string;
  redirectUrl: string;
}

export function EmailVerification({
  name,
  redirectUrl,
}: EmailVerificationProps) {
  return (
    <Html lang="en">
      <Body>
        <Container>
          <Heading as="h1">Hi {name},</Heading>
          <Heading as="h2">Welcome to FakeBot!</Heading>
          <Text>
            We're excited to have you on board. Please click the button below to
            verify your email and start using FakeBot:
          </Text>
          <Button href={redirectUrl}>Verify Email</Button>
        </Container>
        <Text>
          If you didn't request this verification, please ignore this email.
        </Text>
      </Body>
    </Html>
  );
}
