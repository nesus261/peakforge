import "../globals.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "./dictionaries";

export type Props = {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title: {
      default: "PeakForge",
      template: "%s | PeakForge",
    },
    description: dict.metadata.description,
    openGraph: {
      title: "PeakForge",
      description: dict.metadata.openGraph.description,
      url: "https://peakforge.pl",
      siteName: "peakforge.pl",
      images: [
        {
          url: "https://peakforge.pl/og.png",
          width: 1920,
          height: 1080,
        },
      ],
      locale: dict.metadata.openGraph.locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "PeakForge",
      card: "summary_large_image",
    },
    icons: {
      shortcut: "/favicon.ico",
    },
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      className={[inter.variable, calSans.variable].join(" ")}
    >
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
