import { Button, Container, Heading, Text } from "@react-email/components";
import StyleContainer from "./shared/style-container";
import Navigation from "./shared/button";

export interface EmailVerificationProps {
  name: string;
  redirectUrl: string;
}

export function EmailVerification({
  name,
  redirectUrl,
}: EmailVerificationProps) {
  return (
    <StyleContainer>
      <Container>
        <Heading as="h1">Hi {name ?? "there"},</Heading>
        <Heading
          as="h2"
          className="text-primary"
        >
          Welcome to FakeBot!
        </Heading>
        <Text>
          We're excited to have you on board. Please click the button below to
          verify your email and start using FakeBot:
        </Text>
        <Navigation href={redirectUrl ?? ""}>Verify Email</Navigation>
        <Text>
          If you didn't request this verification, please ignore this email.
        </Text>
      </Container>
    </StyleContainer>
  );
}

export default EmailVerification;
