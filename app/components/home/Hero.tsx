"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import FlippedImage from "../image/FlippedImage";
import TextLabelBold from "../text/TextLabelBold";
import TextHeader from "../text/TextHeader";
import TextBody70 from "../text/TextBody70";
import { Button } from "@nextui-org/react";
import { IconArrowDown } from "../icons";
import Link from "next/link";

type HeroProps = {
  lang: string;
};

export const Hero = async ({ lang }: HeroProps) => {
  const dict = await getDictionary(lang);
  const isRtl = lang.includes("fa");

  const scrolltoSummary = () => {
    const element = document.getElementById("summary");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <section className="md:bg-[url('/developer.svg')] dark:md:bg-[url('/developer-dark.svg')] bg-no-repeat bg-contain">
      <div className="grid items-end justify-center md:gap-10 md:grid-cols-2">
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
            <TextLabelBold text={dict.about.name} className="" />
            <TextHeader text={dict.about.title} className="" />
            <TextBody70 text={dict.about.shortDescription} className="" />
          </div>
          <div className="flex flex-row items-start space-y-0 gap-4">
            <Button className="flex items-center" onClick={scrolltoSummary}>
              {dict.about.readAboutMe}
              <div className="animate-bounce">
                <IconArrowDown />
              </div>
            </Button>
            <Button
              href={dict.intro.resumeUrl}
              as={Link}
              variant="bordered"
              target="_blank"
            >
              {dict.intro.viewResume}
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
    </section>
  );
};
