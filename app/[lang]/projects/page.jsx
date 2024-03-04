"use client";

import TextBody60 from "@/app/components/text/TextBody60";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import { ProjectList } from "@/data/en/projectList";
import { Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default async function Home({ params: { lang } }) {
  const allProjects = lang === "fa" ? "همه" : "All";
  const direction = lang == "en" ? "ltr" : "rtl";
  const uniqueCategories = [
    ...new Set(ProjectList.map((item) => item.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState(allProjects);
  const filterItemsByCategory = (selectedCategory) => {
    if (selectedCategory === allProjects) {
      return ProjectList;
    } else {
      return ProjectList.filter((item) => item.category === selectedCategory);
    }
  };

  return (
    <main dir={direction} className="min-h-screen">
      <div className="flex flex-row overflow-auto px-2 md:px-24 py-2 my-10 items-center justify-center">
        <Chip
          onClick={() => setSelectedCategory(allProjects)}
          radius="sm"
          variant="solid"
          size="lg"
          className={`cursor-pointer ${
            selectedCategory === allProjects
              ? "bg-primary text-white"
              : "bg-white text-onWhite/70 hover:text-onWhite dark:bg-black dark:text-onBlack/70 dark:hover:text-onBlack"
          }`}
        >
          {allProjects}
        </Chip>

        {uniqueCategories.map((category) => (
          <Chip
            key={category}
            onClick={() => setSelectedCategory(category)}
            active={selectedCategory === category}
            radius="sm"
            size="lg"
            className={`cursor-pointer ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-white text-onWhite/70 hover:text-onWhite dark:bg-black dark:text-onBlack/70 dark:hover:text-onBlack"
            }`}
          >
            {category}
          </Chip>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filterItemsByCategory(selectedCategory).map((item) => (
          <li key={item.id}>
            <Link href={item.websiteUrl}>
              <div className="flex flex-col p-4 border rounded-lg	border-1 border-white dark:border-black hover:border-black/20 dark:hover:border-white/20 hover:border-1 hover:bg-black/5 dark:hover:bg-white/5 w-fit">
                <Image src={item.banner} width={300} height={300} />
                <div className="flex flex-row gap-2">
                  <TextTitleSmall text={item.title} className="mt-4" />
                  {item.technologies}
                </div>
                <TextBody60 text={item.subtitle} className="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
