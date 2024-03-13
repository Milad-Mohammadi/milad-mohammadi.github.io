"use client";
import { usePathname } from "next/navigation";
import { getDictionary } from "../[lang]/dictionaries";
import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import TextTitleMedium from "./text/TextTitleMedium";
import TextBody60 from "./text/TextBody60";
import { Logo } from "./icons/Logo";
import Link from "next/link";
import { SocialLinkIcon } from "./container/SocialLinkIcon";
import { LogoInstagram } from "./icons/logo/LogoInstagram";
import { LogoLinkedin } from "./icons/logo/LogoLinkedin";
import { LogoGithub } from "./icons/logo/LogoGithub";
import { LogoStackoverflow } from "./icons/logo/LogoStackoverflow";
import { LogoX } from "./icons/LogoX";
import { IconEmail } from "./icons/social/IconEmail";
import { IconPhone } from "./icons/social/IconPhone";

export const FooterSection = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const [dict, setDict] = useState(null);
  const direction = language === "en" ? "ltr" : "rtl";
  const socialLogoClassnames =
    "transition hover:fill-primary dark:hover:fill-primary";
  const socialLogoClassnamesStroke =
    "transition hover:stroke-primary dark:hover:stroke-primary";
  const socialLogoSize = 28;

  useEffect(() => {
    const fetchDictionaries = async () => {
      try {
        const dictionaries = await getDictionary(language);
        setDict(dictionaries);
      } catch (error) {
        console.error("Error fetching dictionaries:", error);
      }
    };

    fetchDictionaries();
  }, [language]);

  return (
    <section className="w-full" dir={direction}>
      <Divider orientation="horizontal" />
      <div className="py-6 grid place-items-center grid-cols-1 gap-6">
        <div className="flex flex-col order-last items-center text-center">
          <TextBody60 text="© 2024" className="" />
          <TextBody60
            text="Design & development by Milad Mohammadi"
            className=""
          />
        </div>

        <div className="flex flex-row gap-4">
          <SocialLinkIcon
            icon={
              <IconPhone
                size={socialLogoSize}
                classname={socialLogoClassnamesStroke}
              />
            }
            url="tel:+989352112040"
          />

          <SocialLinkIcon
            icon={
              <IconEmail
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url="@"
          />
          <SocialLinkIcon
            icon={
              <LogoInstagram
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url="@"
          />
          <SocialLinkIcon
            icon={
              <LogoLinkedin
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url="@"
          />
          <SocialLinkIcon
            icon={
              <LogoGithub
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url="@"
          />
          <SocialLinkIcon
            icon={
              <LogoStackoverflow
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url="@"
          />
          <SocialLinkIcon
            icon={
              <LogoX size={socialLogoSize} classname={socialLogoClassnames} />
            }
            url="@"
          />
        </div>
      </div>
    </section>
  );
};
