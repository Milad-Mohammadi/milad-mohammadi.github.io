"use client";

import PageContainer from "@/app/components/container/PageContainer";
import { IconClose } from "@/app/components/icons/common/IconClose";
import { IconDate } from "@/app/components/icons/common/IconDate";
import { IconHandshake } from "@/app/components/icons/common/IconHandshake";
import { IconWebsite } from "@/app/components/icons/common/IconWebsite";
import { LogoGithub } from "@/app/components/icons/logo/LogoGithub";
import TextBody70 from "@/app/components/text/TextBody70";
import TextTitleMedium from "@/app/components/text/TextTitleMedium";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import { ProjectList } from "@/data/en/projectList";
import { ProjectListFa } from "@/data/fa/projectList";
import {
  Chip,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Home({ params: { lang } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const allProjects = lang === "fa" ? "همه" : "All";
  const projects = lang == "en" ? ProjectList : ProjectListFa;
  const uniqueCategories = [...new Set(projects.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(allProjects);
  const filterItemsByCategory = (selectedCategory) => {
    if (selectedCategory === allProjects) {
      return projects;
    } else {
      return projects.filter((item) => item.category === selectedCategory);
    }
  };

  const handleCategorySelectionChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const showDetails = (item) => {
    setModalData(item);
    onOpen();
  };

  return (
    <PageContainer language={lang}>
      <div className="hidden md:flex flex-row overflow-auto px-2 md:px-24 py-2 my-10 items-center justify-center">
        <Chip
          key={allProjects}
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

      <div className="flex md:hidden my-10 w-full">
        <Select
          aria-label="category"
          name="category"
          variant="bordered"
          classNames={{
            value: `${lang === "fa" ? "text-start px-6" : ""}`,
            listboxWrapper: `${lang === "fa" ? "text-start" : ""}`,
          }}
          listboxProps={{
            itemClasses: {
              base: [`${lang === "fa" ? "text-end" : "text-start"}`],
            },
          }}
          defaultSelectedKeys={[selectedCategory]}
          onChange={handleCategorySelectionChange}
        >
          <SelectItem key={allProjects} value={allProjects}>
            {allProjects}
          </SelectItem>

          {uniqueCategories.map((category) => (
            <SelectItem key={category} value={category} >
              {category}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filterItemsByCategory(selectedCategory).map((item) => (
          <div onClick={() => showDetails(item)} key={item.title}>
            <div className="flex flex-col p-4 border rounded-lg	border-1 border-white dark:border-black hover:border-black/20 dark:hover:border-white/20 hover:border-1 hover:bg-black/5 dark:hover:bg-white/5 w-fit cursor-pointer">
              <Image
                src={item.banner}
                width="400"
                height="400"
                className="object-cover aspect-square"
                alt={item.title}
              />
              <div className="flex flex-row gap-2 place-items-center">
                <TextTitleMedium text={item.title} className="mt-2" />
              </div>
              <TextBody70 text={item.subtitle} className="" />
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        backdrop="blur"
        classNames={{
          header: "flex justify-center p-0",
          body: "gap-0",
        }}
        hideCloseButton
        scrollBehavior="outside"
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="relative">
                  <Image
                    alt={modalData.title}
                    src={modalData.banner}
                    width="100%"
                    className="object-cover"
                    style={{ zIndex: 0 }}
                  />

                  <div className="flex justify-end gap-2 absolute top-0 left-0 right-0 p-4">
                    <Button
                      onPress={onClose}
                      size="sm"
                      isIconOnly
                      className="rounded-full"
                    >
                      <IconClose size={16} />
                    </Button>
                  </div>

                  <div className="flex flex-row absolute bottom-0 left-0 right-0 p-4">
                    {modalData.websiteUrl !== "" && (
                      <Button
                        onPress={onClose}
                        as={Link}
                        href={modalData.websiteUrl}
                        size="lg"
                        target="_blank"
                        isIconOnly
                        className="rounded-full shadow-lg ring ring-4 ring-onWhite dark:ring-onBlack"
                      >
                        <IconWebsite size={36} />
                      </Button>
                    )}
                    {modalData.githubUrl !== "" && (
                      <Button
                        onPress={onClose}
                        as={Link}
                        href={modalData.githubUrl}
                        size="lg"
                        target="_blank"
                        isIconOnly
                        className="rounded-full shadow-lg ring ring-4 ring-onWhite dark:ring-onBlack"
                      >
                        <LogoGithub size={36} />
                      </Button>
                    )}
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row w-full gap-2 my-2 justify-between">
                  <TextTitleSmall text={modalData.title} />
                  <div className="flex flex-row gap-2 md:gap-4 rounded-full py-2 px-4 bg-black/10 dark:bg-white/10">
                    {modalData.technologies}
                  </div>
                </div>

                <div className="flex flex-row gap-1 items-center">
                  <IconDate /> <TextBody70 text={modalData.date} />
                </div>

                {modalData.client !== "" && (
                  <div className="flex flex-row gap-1 items-center">
                    <IconHandshake /> <TextBody70 text={modalData.client} />
                  </div>
                )}

                <TextBody70 text={modalData.description} className="my-4" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </PageContainer>
  );
}
