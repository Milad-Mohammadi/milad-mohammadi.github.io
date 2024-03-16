"use client";
import { usePathname } from "next/navigation";
import { getDictionary } from "../[lang]/dictionaries";
import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import TextBody70 from "./text/TextBody70";
import { SocialLinkIcon } from "./container/SocialLinkIcon";
import { LogoInstagram } from "./icons/logo/LogoInstagram";
import { LogoLinkedin } from "./icons/logo/LogoLinkedin";
import { LogoGithub } from "./icons/logo/LogoGithub";
import { LogoStackoverflow } from "./icons/logo/LogoStackoverflow";
import { LogoX } from "./icons/LogoX";
import { IconEmail } from "./icons/social/IconEmail";
import { IconPhone } from "./icons/social/IconPhone";
import { constants } from "../../data/Constants";
import Link from "next/link";

export const FooterSection = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const [dict, setDict] = useState();
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
    <section className="w-full mt-16" dir={direction}>
      <Divider orientation="horizontal" />
      <div className="py-6 grid place-items-center grid-cols-1 gap-6">
        <div className="flex flex-col order-last items-center text-center">
          <TextBody70 text={dict ? dict.footer.copyright : ""} className="" />
          <div className="flex flex-row gap-1">
            <TextBody70
              text={dict ? dict.footer.designAndDevBy : ""}
              className=""
            />

            <Link href={`${language}/`}>
              <TextBody70
                text={dict ? dict.about.name : ""}
                className="font-bold hover:text-primary transition"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <SocialLinkIcon
            icon={
              <IconPhone
                size={socialLogoSize}
                classname={socialLogoClassnamesStroke}
              />
            }
            url={constants.phone}
          />

          <SocialLinkIcon
            icon={
              <IconEmail
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url={constants.email}
          />
          <SocialLinkIcon
            icon={
              <LogoInstagram
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url={constants.instagram}
          />
          <SocialLinkIcon
            icon={
              <LogoLinkedin
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url={constants.linkedin}
          />
          <SocialLinkIcon
            icon={
              <LogoGithub
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url={constants.github}
          />
          <SocialLinkIcon
            icon={
              <LogoStackoverflow
                size={socialLogoSize}
                classname={socialLogoClassnames}
              />
            }
            url={constants.stackoverflow}
          />
          <SocialLinkIcon
            icon={
              <LogoX size={socialLogoSize} classname={socialLogoClassnames} />
            }
            url={constants.x}
          />
        </div>
      </div>
    </section>
  );
};
