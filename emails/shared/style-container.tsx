import {
  Body,
  Font,
  Head,
  Html,
  pixelBasedPreset,
  Tailwind,
} from "@react-email/components";

export function StyleContainer({
  children,
  lang = "en",
}: {
  children: React.ReactNode;
  lang?: string;
}) {
  return (
    <Html lang={lang}>
      <Head>
        <Font
          fontFamily="Quicksand"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body>
        <Tailwind
          config={{
            presets: [pixelBasedPreset],
            theme: {
              extend: {
                colors: {
                  primary: "oklch(0.7341 0.1296 177.5956)",
                  secondary: "oklch(0.8857 0.1093 83.7156)",
                },
              },
            },
          }}
        >
          {children}
        </Tailwind>
      </Body>
    </Html>
  );
}

export default StyleContainer;
