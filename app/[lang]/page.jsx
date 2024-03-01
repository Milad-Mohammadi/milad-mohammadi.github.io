import PageContainer from "./PageContainer";
import { getDictionary } from "./dictionaries";
import Link from "next/link";
import TextHeader from "../components/text/TextHeader";
import TextLabelBold from "../components/text/TextLabelBold";
import TextBody60 from "../components/text/TextBody60";
import FlippedImage from "../components/image/FlippedImage";
import { Button } from "@nextui-org/react";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const isRtl = lang.includes("fa");

  return (
    <PageContainer language={lang}>
      <section>
        <div className="md:bg-[url('/developer.svg')] bg-no-repeat bg-contain">
          <div className="grid items-end justify-center md:gap-10 md:grid-cols-2 lg:px-10 xl:px-28 2xl:px-80">
            <div className="md:hidden items-end justify-end relative">
              <FlippedImage
                alt="Hero"
                height="400"
                src="/hero.png"
                width="400"
                className="grayscale"
                isRTL={isRtl}
              />
              <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 mb-10">
              <div className="space-y-4">
                <TextLabelBold text={dict.about.name} />
                <TextHeader text={dict.about.title} />
                <TextBody60 text={dict.about.shortDescription} />
              </div>
              <div className="flex flex-row items-start space-y-0 gap-4">
                <Button href="#" as={Link}>
                  {dict.about.readAboutMe}
                </Button>
                <Button href="#" as={Link} variant="bordered">
                  {dict.about.projects}
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-end relative">
              <FlippedImage
                alt="Hero"
                height="600"
                src="/hero.png"
                width="600"
                className="grayscale transition duration-300 hover:grayscale-0"
                isRTL={isRtl}
              />
              <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
