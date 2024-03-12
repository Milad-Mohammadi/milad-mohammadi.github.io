"use client";
import { usePathname } from "next/navigation";
import { getDictionary } from "../[lang]/dictionaries";
import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import TextTitleMedium from "./text/TextTitleMedium";
import TextBody60 from "./text/TextBody60";
import { Logo } from "./icons/Logo";

export const FooterSection = () => {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  const language = pathnameSegments[1];
  const [dict, setDict] = useState(null);
  const direction = language === "en" ? "ltr" : "rtl";

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
    <section className="w-full flex flex-col gap-2">
      <Divider orientation="horizontal" />
      <div className="px-10 pt-10 pb-10 xl:pb-24 grid place-items-center xl:place-items-start grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="flex flex-col xl:flex-row gap-2 order-last xl:order-first items-start place-items-center xl:place-items-start">
          <div className="hidden xl:flex">
            <Logo />
          </div>
          <div className="flex flex-col place-items-center xl:place-items-start">
            <span>© 2024</span>
            <span>Design & development by Milad Mohammadi</span>
          </div>
        </div>

        <div className="flex flex-col">
          <TextTitleMedium text="Contact Me —" className="" />
          <TextBody60
            text="I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!"
            className=""
          />
        </div>

        <div className="flex flex-col">
          <TextTitleMedium text="Current availability —" className="" />
          <TextBody60
            text="I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!"
            className=""
          />
        </div>
      </div>
    </section>
  );
};
