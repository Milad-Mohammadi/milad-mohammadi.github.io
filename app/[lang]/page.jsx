import PageContainer from "../components/container/PageContainer";
import { getDictionary } from "./dictionaries";
import Link from "next/link";
import TextHeader from "../components/text/TextHeader";
import TextBody70 from "../components/text/TextBody70";
import TextBody80Medium from "../components/text/TextBody80Medium";
import TextTitleMedium from "../components/text/TextTitleMedium";
import TextTitleLarge from "../components/text/TextTitleLarge";
import { Button } from "@nextui-org/react";
import CardSurface from "../components/container/CardSurface";
import { constants } from "../../data/Constants";
import Image from "next/image";
import { ProjectList } from "@/data/en/projectList";
import { LogoInstagram } from "../components/icons/logo/LogoInstagram";
import { LogoLinkedin } from "../components/icons/logo/LogoLinkedin";
import { LogoGithub } from "../components/icons/logo/LogoGithub";
import { LogoStackoverflow } from "../components/icons/logo/LogoStackoverflow";
import { BrandContainer } from "../components/container/BrandContainer";
import CommentContainer from "../components/container/commentContainer";
import { IconEmail } from "../components/icons/social/IconEmail";
import { IconPhone } from "../components/icons/social/IconPhone";
import { IconWebsite } from "../components/icons/common/IconWebsite";
import { Hero } from "../components/home/Hero";
import { IconAndroid } from "../components/icons/technologies/IconAndroid";
import { IconKotlin } from "../components/icons/technologies/IconKotlin";
import { IconJava } from "../components/icons/technologies/IconJava";
import { IconJetpackCompose } from "../components/icons/technologies/IconJetpackCompose";
import { IconJavaScript } from "../components/icons/technologies/IconJavaScript";
import { IconTypeScript } from "../components/icons/technologies/IconTypeScript";
import { IconReact } from "../components/icons/technologies/IconReact";
import { IconNextJs } from "../components/icons/technologies/IconNextJs";
import { IconTailwind } from "../components/icons/technologies/IconTailwind";
import { IconNextUi } from "../components/icons/technologies/IconNextUi";
import { IconShadcn } from "../components/icons/technologies/IconShadcn";
import { IconExpress } from "../components/icons/technologies/IconExpress";
import { IconMongoDb } from "../components/icons/technologies/IconMongoDb";
import { IconSqlite } from "../components/icons/technologies/IconSqlite";
import { IconMySql } from "../components/icons/technologies/IconMySql";
import { IconFigma } from "../components/icons/technologies/IconFigma";
import { ProjectListFa } from "@/data/fa/projectList";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const projects = lang == "en" ? ProjectList : ProjectListFa;

  return (
    <PageContainer language={lang}>
      <Hero lang={lang} />

      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 pt-24"
        id="summary"
      >
        <CardSurface language={lang} classname="md:col-span-2">
          <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start">
            <div className="flex flex-col w-full p-6 gap-1">
              <TextTitleMedium text={dict.intro.whatIdo} className="pb-2" />
              <TextBody70 text={`• ${dict.intro.androidDev}`} />
              <TextBody70 text={`• ${dict.intro.webDev}`} />
              <TextBody70 text={`• ${dict.intro.uiDesign}`} />
              <TextBody70 text={`• ${dict.intro.tvDev}`} />
              <TextBody70 text={`• ${dict.intro.watchDev}`} />
            </div>
            <Image
              src="/multiplatform.svg"
              width={500}
              height={500}
              alt="Multiplatform"
              className="hover:drop-shadow-xl hidden sm:flex"
            />
          </div>
        </CardSurface>
        <CardSurface
          language={lang}
          classname="bg-[url('/pattern_earh.svg')] bg-cover	bg-no-repeat"
        >
          <div className="flex flex-col gap-4 px-6 py-10">
            <TextHeader text={dict.intro.projects} />
            <TextBody70 text={dict.intro.completedProjects} />
            <Button
              color="primary"
              variant="bordered"
              as={Link}
              href={`${lang}/projects`}
            >
              {dict.intro.viewAll}
            </Button>
          </div>
        </CardSurface>
        <CardSurface
          language={lang}
          classname="outline outline-2 outline-primary bg-[url('/pattern_dot.svg')] bg-cover bg-no-repeat"
        >
          <div className="flex flex-col gap-4 px-6 py-10">
            <TextHeader text={dict.intro.years} />
            <TextBody70 text={dict.intro.yearsOfExperience} />
            <Button
              color="primary"
              href={dict.intro.resumeUrl}
              as={Link}
              target="_blank"
            >
              {dict.intro.viewResume}
            </Button>
          </div>
        </CardSurface>

        <CardSurface language={lang} classname="xl:hidden md:col-span-2">
          <div className="flex flex-col p-6 place-items-center md:place-items-start">
            <TextTitleMedium text={dict.intro.mySkills} />
            <div className="grid grid-cols-5 gap-10 py-6 place-content-center w-full place-items-center">
              <IconAndroid size={30} />
              <IconKotlin size={30} />
              <IconJava size={30} />
              <IconJetpackCompose size={30} />
              <IconJavaScript size={30} />
              <IconTypeScript size={30} />
              <IconReact size={30} />
              <IconNextJs size={30} />
              <IconTailwind size={30} />
              <IconNextUi size={30} />
              <IconShadcn size={30} />
              <IconExpress size={30} />
              <IconMongoDb size={30} />
              <IconSqlite size={30} />
              <IconMySql size={30} />
              <IconFigma size={30} />
            </div>
          </div>
        </CardSurface>

        <CardSurface
          language={lang}
          classname="bg-[url('/pattern1.svg')] bg-cover bg-no-repeat"
        >
          <div className="flex flex-col p-6 place-items-center">
            <TextTitleMedium text={dict.intro.getInTouch} />
            <div className="grid grid-cols-1 gap-5 pt-6">
              <Button
                className="outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.linkedin}
                startContent={<LogoLinkedin size={20} />}
              >
                @vimilad
              </Button>
              <Button
                className="outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.email}
                startContent={<IconEmail size={20} />}
              >
                Mohammadi.dev@gmail.com
              </Button>
              <Button
                className="outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.phone}
                startContent={<IconPhone size={20} />}
              >
                {dict.intro.phone}
              </Button>
            </div>
          </div>
        </CardSurface>
        <CardSurface
          language={lang}
          classname="bg-[url('/pattern_line.svg')] bg-cover bg-no-repeat"
        >
          <div className="flex flex-col p-6 place-items-center">
            <TextTitleMedium text={dict.intro.exploreMyWork} />
            <div className="grid grid-cols-1 gap-5 pt-6">
              <Button
                className="flex items-center outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.github}
                startContent={<LogoGithub size={20} />}
              >
                @Milad-Mohammadi
              </Button>
              <Button
                className="flex items-center outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.stackoverflow}
                startContent={<LogoStackoverflow size={20} />}
              >
                @Milad-Mohammadi
              </Button>
              <Button
                className="flex items-center outline outline-2 outline-primary dark:outline-0"
                as={Link}
                href={constants.instagram}
                startContent={<LogoInstagram size={20} />}
              >
                @vimilad
              </Button>
            </div>
          </div>
        </CardSurface>
        <CardSurface language={lang} classname="hidden xl:grid md:col-span-2">
          <div className="flex flex-col p-6 place-items-center md:place-items-start">
            <TextTitleMedium text={dict.intro.mySkills} />
            <div className="grid grid-cols-6 gap-10 py-6 place-content-center w-full place-items-center">
              <IconAndroid size={30} />
              <IconKotlin size={30} />
              <IconJava size={30} />
              <IconJetpackCompose size={30} />
              <IconJavaScript size={30} />
              <IconTypeScript size={30} />
              <IconReact size={30} />
              <IconNextJs size={30} />
              <IconTailwind size={30} />
              <IconNextUi size={30} />
              <IconShadcn size={30} />
              <IconExpress size={30} />
              <IconMongoDb size={30} />
              <IconSqlite size={30} />
              <IconMySql size={30} />
              <IconFigma size={30} />
            </div>
          </div>
        </CardSurface>
      </section>

      <section className="w-full mt-36 flex flex-col gap-2 place-items-center">
        <TextTitleLarge text={dict.latestProjects.title} />
        <TextBody80Medium text={dict.latestProjects.description} />
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-4 gap-6 lg:px-10 xl:px-28 2xl:px-20 place-content-center">
          {projects.slice(0, 2).map((project) => (
            <CardSurface
              classname="w-fit relative overflow-hidden"
              language={lang}
              key={project.title}
            >
              <div className="absolute bottom-0 left-0 z-0 w-full h-[400px] bg-gradient-to-t from-white via-white/30 dark:from-black dark:via-black/30" />

              <Image
                src={project.banner}
                alt={project.title}
                width={600}
                height={600}
                className="object-cover aspect-square"
              />

              <div className="flex flex-row justify-between absolute bottom-0 left-0 right-0 p-4">
                <div className="flex flex-col gap-2">
                  <TextTitleLarge text={project.title} />
                  <TextBody70 text={project.subtitle} />
                  <div className="flex flex-row gap-4">
                    {project.technologies}
                  </div>
                </div>

                <div className="flex flex-row">
                  {project.websiteUrl !== "" && (
                    <Button
                      as={Link}
                      href={project.websiteUrl}
                      size="lg"
                      target="_blank"
                      isIconOnly
                      className="rounded-full shadow-lg ring ring-4 ring-onWhite dark:ring-onBlack"
                    >
                      <IconWebsite size={36} />
                    </Button>
                  )}
                  {project.githubUrl !== "" && (
                    <Button
                      as={Link}
                      href={project.githubUrl}
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
            </CardSurface>
          ))}
        </div>
      </section>

      <section className="w-full mt-36 flex flex-col gap-2 place-items-center lg:px-10 xl:px-28 2xl:px-0 2xl:w-1/2 text-center">
        <TextTitleLarge text={dict.brands.brandsTitle} />
        <TextBody80Medium text={dict.brands.brandsDescription} />
        <div className="grid grid-cols-3 gap-10 lg:px-10 xl:px-28 2xl:px-0 place-content-center w-full place-items-center mt-8">
          <BrandContainer
            src="/brand/realtyna.png"
            srcDark="/brand/realtyna_dark.png"
            url="https://realtyna.com"
            title={dict.brands.realtyna}
          />
          <BrandContainer
            src="/brand/listings.png"
            srcDark="/brand/listings_dark.png"
            url="https://listings.com"
            title={dict.brands.listings}
          />
          <BrandContainer
            src="/brand/reveali.png"
            srcDark="/brand/reveali_dark.png"
            url="https://reveali.com"
            title={dict.brands.reveali}
          />
          <BrandContainer
            src="/brand/ut.png"
            url="https://ut.ac.ir"
            title={dict.brands.ut}
          />
          <BrandContainer
            src="/brand/cysp.png"
            url="https://cysp.ut.ac.ir"
            title={dict.brands.cysp}
          />
          <BrandContainer
            src="/brand/ismvip.png"
            url="https://ismvip.ir"
            title={dict.brands.ismvip}
          />
          <BrandContainer
            src="/brand/ashmore_alexander.png"
            url="https://ashmorealexander.com"
            title={dict.brands.ashmoreAlexander}
          />
          <BrandContainer
            src="/brand/urban_acres.png"
            url="https://urbanacres.com"
            title={dict.brands.urbanAcres}
          />
          <BrandContainer
            src="/brand/land2legacy.png"
            url="https://land2legacy.com"
            title={dict.brands.land2legacy}
          />
        </div>
      </section>

      <section className="w-full mt-36 flex flex-col gap-2 place-items-center text-center">
        <TextTitleLarge text={dict.comments.title} />
        <TextBody80Medium text={dict.comments.description} />

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all w-full mt-8">
          <CommentContainer
            image="/avatar/kazim_fouladi.jpeg"
            name={dict.comments.kazimFouladi}
            title={dict.comments.kazimFouladiTitle}
            comment={dict.comments.kazimFouladiComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/yaser_khalfi_nejad.jpeg"
            name={dict.comments.yaserKhalfiNejad}
            title={dict.comments.yaserKhalfiNejadTitle}
            comment={dict.comments.yaserKhalfiNejadComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/parham_rahimpour.jpeg"
            name={dict.comments.parhamRahimpour}
            title={dict.comments.parhamRahimpourTitle}
            comment={dict.comments.parhamRahimpourComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/mohammad_seyedi_moadab.jpeg"
            name={dict.comments.mohammadSeyedi}
            title={dict.comments.mohammadSeyediTitle}
            comment={dict.comments.mohammadSeyediComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/masoud_rajabpour.jpeg"
            name={dict.comments.masoudRajabpour}
            title={dict.comments.masoudRajabpourTitle}
            comment={dict.comments.masoudRajabpourComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/sina_lakzaei.jpeg"
            name={dict.comments.sinaLakzaei}
            title={dict.comments.sinaLakzaeiTitle}
            comment={dict.comments.sinaLakzaeiComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/mohammad_fotouhi.jpeg"
            name={dict.comments.mohammadFotouhi}
            title={dict.comments.mohammadFotouhiTitle}
            comment={dict.comments.mohammadFotouhiComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/behnam_nasehi.jpeg"
            name={dict.comments.behnamNasehi}
            title={dict.comments.behnamNasehiTitle}
            comment={dict.comments.behnamNasehiComment}
            language={lang}
          />

          <CommentContainer
            image="/avatar/shahin_ilderemi.jpeg"
            name={dict.comments.shahinIlderemi}
            title={dict.comments.shahinIlderemiTitle}
            comment={dict.comments.shahinIlderemiComment}
            language={lang}
          />
        </div>
      </section>
    </PageContainer>
  );
}
