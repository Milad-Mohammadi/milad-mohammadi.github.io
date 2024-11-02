import type { Metadata, ResolvingMetadata } from "next";
import { Vazirmatn } from "next/font/google";
import Providers from "../providers";
import "../globals.css";
import { NavbarSection } from "../components/Navbar";
import { FooterSection } from "../components/Footer";
import { getDictionary } from "./dictionaries";

const vazir = Vazirmatn({ subsets: ["latin", "arabic", "latin-ext"] });

type Props = {
  params: { lang: string };
};

const LOCALES = ["en", "fa"];

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = params.lang;
  const dict = await getDictionary(language);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
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
    keywords: [
      "میلاد محمدی",
      "میلاد محمدی - مهندس کامپیوتر",
      "میلاد محمدی - توسعه دهنده",
      "توسعه دهنده وب",
      "برنامه نویس",
      "برنامه نویس فرانت اند",
      "برنامه نویس بک اند",
      "برنامه نویس اندروید",
      "پورتفولیو",
      "سایت شخصی برنامه نویس",
      "سایت شخصی برنامه نویس وب",
      "سایت شخصی برنامه نویس اندروید",
      "سایت شخصی توسعه دهنده فول استک",
      "برنامه نویس حرفه ای",
      "برنامه نویس حرفه ای اندروید",
      "برنامه نویس حرفه ای سایت",
      "برنامه نویس موبایل",
      "وب سایت شخصی برنامه نویس",
      "09352112040",
      "Mohammadi.dev@gmail.com",
      "Milad Mohammadi",
      "Milad Mohammadi - software developer",
      "Milad Mohammadi - software enginner",
      "Web developer",
      "Frontend developer",
      "Backend developer",
      "Android developer",
      "Portfolio website",
      "Frontend Developer Portfolio",
      "Backend Developer Portfolio",
      "Mobile Developer Portfolio",
      "Android Developer Portfolio",
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${vazir.className} bg-white dark:bg-black text-onWhite dark:text-onBlack lg:px-10 xl:px-28 2xl:px-80`}
      >
        <Providers>
          <NavbarSection />
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
