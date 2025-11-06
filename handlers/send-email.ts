import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(props: {
  to: string;
  subject: string;
  react: React.ReactNode;
}) {
  const { data, error } = await resend.emails.send({
    from: "fakebot@noreply.com",
    to: props.to,
    subject: props.subject,
    react: props.react,
  });

  if (error) {
    return new Response(JSON.stringify({ error }));
  }

  return new Response(JSON.stringify({ data }));
}
