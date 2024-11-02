"use client";

import { useState } from "react";
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
import TextBody70 from "@/app/components/text/TextBody70";
import TextTitleMedium from "@/app/components/text/TextTitleMedium";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import { IconClose } from "@/app/components/icons/common/IconClose";
import { IconWebsite } from "@/app/components/icons/common/IconWebsite";
import { LogoGithub } from "@/app/components/icons/logo/LogoGithub";

const ProjectsClient = ({ lang, projects, allProjects, uniqueCategories }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(allProjects);
  
  const filterItemsByCategory = (selectedCategory) => {
    if (selectedCategory === allProjects) {
      return projects;
    } else {
      return projects.filter((item) => item.category === selectedCategory);
    }
  };

  const showDetails = (item) => {
    setModalData(item);
    onOpen();
  };

  return (
    <div>
      {/* Chips for categories */}
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
      
      {/* Select for mobile */}
      <div className="flex md:hidden my-10 w-full">
        <Select
          aria-label="category"
          name="category"
          variant="bordered"
          defaultSelectedKeys={[selectedCategory]}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <SelectItem key={allProjects} value={allProjects}>
            {allProjects}
          </SelectItem>
          {uniqueCategories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Project Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filterItemsByCategory(selectedCategory).map((item) => (
          <div onClick={() => showDetails(item)} key={item.title}>
            <div className="flex flex-col p-4 border rounded-lg border-1 border-white dark:border-black hover:border-black/20 dark:hover:border-white/20 hover:border-1 hover:bg-black/5 dark:hover:bg-white/5 w-fit cursor-pointer">
              <Image
                src={item.banner}
                width="400"
                height="400"
                className="object-cover aspect-square"
                alt={item.title}
              />
              <TextTitleMedium text={item.title} className="mt-2" />
              <TextBody70 text={item.subtitle} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        backdrop="blur"
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
                  />
                  <div className="flex justify-end gap-2 absolute top-0 left-0 right-0 p-4">
                    <Button onPress={onClose} size="sm" isIconOnly className="rounded-full">
                      <IconClose size={16} />
                    </Button>
                  </div>
                  <div className="flex flex-row absolute bottom-0 left-0 right-0 p-4">
                    {modalData.websiteUrl && (
                      <Button onPress={onClose} as="a" href={modalData.websiteUrl} size="lg" target="_blank" isIconOnly className="rounded-full">
                        <IconWebsite size={36} />
                      </Button>
                    )}
                    {modalData.githubUrl && (
                      <Button onPress={onClose} as="a" href={modalData.githubUrl} size="lg" target="_blank" isIconOnly className="rounded-full">
                        <LogoGithub size={36} />
                      </Button>
                    )}
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <TextTitleSmall text={modalData.title} />
                <TextBody70 text={modalData.description} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectsClient;
