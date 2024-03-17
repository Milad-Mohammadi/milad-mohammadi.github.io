"use client";
import {
  Button,
  Input,
  ScrollShadow,
  Select,
  SelectItem,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import PageContainer from "@/app/components/container/PageContainer";
import { getDictionary } from "../dictionaries";
import TextTitleMedium from "@/app/components/text/TextTitleMedium";
import TextBody70 from "@/app/components/text/TextBody70";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import React from "react";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default async function OrderProject({ params: { lang } }) {
  const [error, setError] = React.useState({});
  const [isSending, setIsSending] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalText, setModalText] = React.useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dict = await getDictionary(lang);
  const plans = [
    dict.orderProject.mentorship,
    dict.orderProject.question,
    dict.orderProject.web,
    dict.orderProject.android,
    dict.orderProject.androidAndWeb,
  ];
  const menuClassnames =
    "hover:text-primary hover:font-bold dark:hover:text-onBlack";

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsSending(true);
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const plan = formData.get("plan");
    const email = formData.get("email");
    const company = formData.get("company");
    const projectName = formData.get("projectName");
    const country = formData.get("country");
    const state = formData.get("state");
    const description = formData.get("description");

    console.log(description);
    if (name.length === 0) {
      setIsSending(false);
      setError({ text: dict.orderProject.enterFullName, name: "name" });
      return;
    } else if (email.length === 0) {
      setIsSending(false);
      setError({ text: dict.orderProject.enterEmail, name: "email" });
      return;
    } else if (plan === null) {
      setIsSending(false);
      setError({ text: dict.orderProject.choosePlan, name: "plan" });
      return;
    } else if (country.length === 0) {
      setIsSending(false);
      setError({ text: dict.orderProject.enterCountryName, name: "country" });
      return;
    } else if (state.length === 0) {
      setIsSending(false);
      setError({ text: dict.orderProject.enterStateName, name: "state" });
      return;
    } else if (description.length === 0) {
      setIsSending(false);
      setError({
        text: dict.orderProject.enterDescription,
        name: "description",
      });
      return;
    } else {
      setError({});
      const formattedText = `
      Name: ${name}
      Plan: ${plan}
      Company: ${company}
      Project Name: ${projectName}
      Country: ${country}
      State: ${state}
      Description: ${description}
    `;

      fetch("https://formcarry.com/s/zWGUQedrzGY", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, formattedText }),
      })
        .then((response) => response.json())
        .then((response) => {
          setIsSending(false);

          if (response.code === 200) {
            setModalTitle(dict.orderProject.orderProjectReceived);
            setModalText(dict.orderProject.orderProjectReceivedDescription);
            onOpen();
          } else if (response.code === 422) {
            setModalTitle(dict.orderProject.orderProjectError);
            setModalText(dict.orderProject.orderProjectErrorDescription);
            onOpen();
          } else {
            setModalTitle(dict.orderProject.orderProjectError);
            setModalText(dict.orderProject.orderProjectErrorDescription);
            onOpen();
          }
        })
        .catch((error) => {
          setIsSending(false);
          setModalTitle(dict.orderProject.orderProjectError);
          setModalText(dict.orderProject.orderProjectErrorDescription);
          onOpen();
        });
    }
  };

  return (
    <PageContainer language={lang}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <ScrollShadow
          hideScrollBar
          className="order-last md:order-first h-fit md:h-[630px]"
        >
          <TextTitleMedium
            text={dict.orderProject.developmentProcess}
            className="my-4"
          />
          <TextBody70 text={dict.orderProject.developmentProccessDescription} />

          <TextTitleSmall
            text={dict.orderProject.process}
            className="mt-4 mb-1"
          />
          <div onClick={() => scrollToId("rules")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.rules}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("order")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.receiveOrderProject}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("meeting")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.meeting}`}
              className={menuClassnames}
            />
          </div>
          <div
            onClick={() => scrollToId("contract")}
            className="cursor-pointer"
          >
            <TextBody70
              text={`■ ${dict.orderProject.signContract}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("design")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.design}`}
              className={menuClassnames}
            />
          </div>
          <div
            onClick={() => scrollToId("development")}
            className="cursor-pointer"
          >
            <TextBody70
              text={`■ ${dict.orderProject.development}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("test")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.finalTest}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("teach")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.teach}`}
              className={menuClassnames}
            />
          </div>
          <div onClick={() => scrollToId("finish")} className="cursor-pointer">
            <TextBody70
              text={`■ ${dict.orderProject.finalizeProject}`}
              className={menuClassnames}
            />
          </div>

          <div id="rules" className="pt-16">
            <TextTitleSmall text={dict.orderProject.rules} className="mb-1" />
            <TextBody70 text={dict.orderProject.rulesDescription} />
          </div>

          <div id="order" className="pt-16">
            <TextTitleSmall
              text={dict.orderProject.receiveOrderProject}
              className="mb-1"
            />
            <TextBody70
              text={dict.orderProject.receiveOrderProjectDescription}
            />
          </div>

          <div id="meeting" className="pt-16">
            <TextTitleSmall text={dict.orderProject.meeting} className="mb-1" />
            <TextBody70 text={dict.orderProject.meetingDescription} />
          </div>

          <div id="contract" className="pt-16">
            <TextTitleSmall
              text={dict.orderProject.signContract}
              className="mb-1"
            />
            <TextBody70 text={dict.orderProject.signContractDescription} />
          </div>

          <div id="design" className="pt-16">
            <TextTitleSmall text={dict.orderProject.design} className="mb-1" />
            <TextBody70 text={dict.orderProject.designDescription} />
          </div>

          <div id="development" className="pt-16">
            <TextTitleSmall
              text={dict.orderProject.development}
              className="mb-1"
            />
            <TextBody70 text={dict.orderProject.developmentDescription} />
          </div>

          <div id="test" className="pt-16">
            <TextTitleSmall
              text={dict.orderProject.finalTest}
              className="mb-1"
            />
            <TextBody70 text={dict.orderProject.finalTestDescription} />
          </div>

          <div id="teach" className="pt-16">
            <TextTitleSmall text={dict.orderProject.teach} className="mb-1" />
            <TextBody70 text={dict.orderProject.teachDescription} />
          </div>

          <div id="finish" className="pt-16">
            <TextTitleSmall
              text={dict.orderProject.finalizeProject}
              className="mb-1"
            />
            <TextBody70 text={dict.orderProject.finalizeProjectDescription} />
          </div>

          <div id="time" className="pt-20">
            <TextTitleSmall
              text={dict.orderProject.timeNeeded}
              className="mb-1"
            />
            <TextBody70 text={dict.orderProject.timeNeededDescription} />
          </div>

          <div id="price">
            <TextTitleSmall
              text={dict.orderProject.priceFactors}
              className="mt-4 mb-1"
            />
            <TextBody70 text={dict.orderProject.priceFactorsDescription} />
          </div>

          <div id="payment">
            <TextTitleSmall
              text={dict.orderProject.paymentMethod}
              className="mt-4 mb-1"
            />
            <TextBody70 text={dict.orderProject.paymentMethodDescription} />
          </div>

          <div id="question">
            <TextTitleSmall
              text={dict.orderProject.anyQuestion}
              className="mt-4 mb-1"
            />
            <TextBody70 text={dict.orderProject.anyQuestionDescription} />
          </div>
        </ScrollShadow>
        <form className="flex flex-col gap-4 mt-10" onSubmit={onSubmit}>
          <Input
            aria-label="name"
            name="name"
            type="name"
            variant="bordered"
            placeholder={dict.orderProject.fullName}
            errorMessage={error.name === "name" ? error.text : ""}
            isInvalid={error.name === "name"}
          />

          <Input
            aria-label="email"
            name="email"
            type="email"
            variant="bordered"
            placeholder={dict.orderProject.email}
            errorMessage={error.name === "email" ? error.text : ""}
            isInvalid={error.name === "email"}
          />

          <Select
            aria-label="plan"
            name="plan"
            variant="bordered"
            placeholder={dict.orderProject.plan}
            classNames={{
              value: `${lang === "fa" ? "text-start px-6" : ""}`,
              placeholder: `${lang === "fa" ? "text-start" : ""}`,
              listboxWrapper: `${lang === "fa" ? "text-start" : ""}`,
            }}
            listboxProps={{
              itemClasses: {
                base: [`${lang === "fa" ? "text-end" : "text-start"}`],
              },
            }}
            errorMessage={error.name === "plan" ? error.text : ""}
            isInvalid={error.name === "plan"}
          >
            {plans.map((plan) => (
              <SelectItem key={plan} value={plan}>
                {plan}
              </SelectItem>
            ))}
          </Select>

          <Input
            aria-label="company"
            name="company"
            variant="bordered"
            placeholder={dict.orderProject.companyName}
          />

          <Input
            aria-label="projectName"
            name="projectName"
            variant="bordered"
            placeholder={dict.orderProject.projectName}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Input
              aria-label="country"
              name="country"
              variant="bordered"
              placeholder={dict.orderProject.country}
              errorMessage={error.name === "country" ? error.text : ""}
              isInvalid={error.name === "country"}
            />
            <Input
              aria-label="state"
              name="state"
              variant="bordered"
              placeholder={dict.orderProject.state}
              errorMessage={error.name === "state" ? error.text : ""}
              isInvalid={error.name === "state"}
            />
          </div>

          <Textarea
            aria-label="description"
            name="description"
            variant="bordered"
            placeholder={dict.orderProject.description}
            errorMessage={error.name === "description" ? error.text : ""}
            isInvalid={error.name === "description"}
          />
          <Button
            className="w-full"
            color="primary"
            type="submit"
            isLoading={isSending}
          >
            {dict.orderProject.send}
          </Button>
        </form>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent dir={lang === "fa" ? "rtl" : "ltr"}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                <p>{modalText}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  {dict.orderProject.okThanks}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </PageContainer>
  );
}
