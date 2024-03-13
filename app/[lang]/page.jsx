import PageContainer from "../components/container/PageContainer";
import { getDictionary } from "./dictionaries";
import Link from "next/link";
import TextHeader from "../components/text/TextHeader";
import TextLabelBold from "../components/text/TextLabelBold";
import TextBody60 from "../components/text/TextBody60";
import TextTitleMedium from "../components/text/TextTitleMedium";
import FlippedImage from "../components/image/FlippedImage";
import { Button, User } from "@nextui-org/react";
import { IconArrowDown } from "../components/icons";
import CardSurface from "../components/container/CardSurface";
import { IconMultiplatform } from "../components/icons";
import {
  AndroidSVG,
  ExpressSVG,
  FigmaSVG,
  JavaSVG,
  JavascriptSVG,
  JetpackComposeSVG,
  KotlinSVG,
  MongoDBSVG,
  MySqlSVG,
  NextJsSVG,
  NextUISVG,
  ReactSVG,
  ShadcnSVG,
  SqliteSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/icons";
import Image from "next/image";
import { ProjectList } from "@/data/en/projectList";
import { LogoInstagram } from "../components/icons/logo/LogoInstagram";
import { LogoLinkedin } from "../components/icons/logo/LogoLinkedin";
import { LogoGithub } from "../components/icons/logo/LogoGithub";
import { LogoStackoverflow } from "../components/icons/logo/LogoStackoverflow";
import { BrandContainer } from "../components/container/BrandContainer";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const isRtl = lang.includes("fa");

  return (
    <PageContainer language={lang}>
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
              <TextLabelBold text={dict.about.name} />
              <TextHeader text={dict.about.title} />
              <TextBody60 text={dict.about.shortDescription} />
            </div>
            <div className="flex flex-row items-start space-y-0 gap-4">
              <Button href="#" as={Link} className="flex items-center">
                {dict.about.readAboutMe}
                <div className="animate-bounce">
                  <IconArrowDown />
                </div>
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
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 pt-10">
        <CardSurface language={lang} classname="md:col-span-2">
          <Link href={"#"}>
            <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start">
              <div className="flex flex-col w-full p-6 gap-1">
                <TextTitleMedium text={dict.intro.whatIdo} className="pb-2" />
                <TextBody60 text={`• ${dict.intro.androidDev}`} />
                <TextBody60 text={`• ${dict.intro.webDev}`} />
                <TextBody60 text={`• ${dict.intro.uiDesign}`} />
                <TextBody60 text={`• ${dict.intro.tvDev}`} />
                <TextBody60 text={`• ${dict.intro.watchDev}`} />
              </div>
              <IconMultiplatform className="hover:drop-shadow-xl hidden sm:flex" />
            </div>
          </Link>
        </CardSurface>
        <CardSurface
          language={lang}
          classname="bg-[url('/pattern_earh.svg')] bg-cover	bg-no-repeat"
        >
          <div className="flex flex-col gap-4 px-6 py-10">
            <TextHeader text={dict.intro.projects} />
            <TextBody60 text={dict.intro.completedProjects} />
            <Button color="primary" variant="bordered">
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
            <TextBody60 text={dict.intro.yearsOfExperience} />
            <Button color="primary">{dict.intro.downloadResume}</Button>
          </div>
        </CardSurface>

        <CardSurface language={lang} classname="xl:hidden md:col-span-2">
          <div className="flex flex-col p-6 place-items-center md:place-items-start">
            <TextTitleMedium text={dict.intro.mySkills} />
            <div className="grid grid-cols-5 gap-10 py-6 place-content-center w-full place-items-center">
              <AndroidSVG />
              <KotlinSVG />
              <JavaSVG />
              <JetpackComposeSVG />
              <JavascriptSVG />
              <TypescriptSVG />
              <ReactSVG />
              <NextJsSVG />
              <TailwindSVG />
              <NextUISVG />
              <ShadcnSVG />
              <ExpressSVG />
              <MongoDBSVG />
              <SqliteSVG />
              <MySqlSVG />
              <FigmaSVG />
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
              <Button className="outline outline-2 outline-primary dark:outline-0">
                <LogoLinkedin /> @vimilad
              </Button>
              <Button className="outline outline-2 outline-primary dark:outline-0">
                Mohammadi.dev@gmail.com
              </Button>
              <Button className="outline outline-2 outline-primary dark:outline-0">
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
              <Button className="flex items-center outline outline-2 outline-primary dark:outline-0">
                <LogoGithub /> @Milad-Mohammadi
              </Button>
              <Button className="flex items-center outline outline-2 outline-primary dark:outline-0">
                <LogoStackoverflow /> @Milad-Mohammadi
              </Button>
              <Button className="flex items-center outline outline-2 outline-primary dark:outline-0">
                <LogoInstagram /> @vimilad
              </Button>
            </div>
          </div>
        </CardSurface>
        <CardSurface language={lang} classname="hidden xl:grid md:col-span-2">
          <div className="flex flex-col p-6 place-items-center md:place-items-start">
            <TextTitleMedium text={dict.intro.mySkills} />
            <div className="grid grid-cols-6 gap-10 py-6 place-content-center w-full place-items-center">
              <AndroidSVG />
              <KotlinSVG />
              <JavaSVG />
              <JetpackComposeSVG />
              <JavascriptSVG />
              <TypescriptSVG />
              <ReactSVG />
              <NextJsSVG />
              <TailwindSVG />
              <NextUISVG />
              <ShadcnSVG />
              <ExpressSVG />
              <MongoDBSVG />
              <SqliteSVG />
              <MySqlSVG />
              <FigmaSVG />
            </div>
          </div>
        </CardSurface>
      </section>

      <section className="w-full my-24 flex flex-col gap-2 place-items-center text-center">
        <TextTitleMedium text="آخرین پروژه‌ها" />
        <TextBody60 text="قدرت گرفته از خلاقیت، دقت و کیفیت؛ با استفاده از به‌روزترین تکنولوژی‌های روز دنیا" />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-4 gap-4 lg:px-10 xl:px-28 2xl:px-20">
          {ProjectList.slice(0, 2).map((project) => (
            <CardSurface
              classname="flex flex-col md:flex-row place-items-center md:place-items-end"
              language={lang}
            >
              <div className="flex-auto w-full md:w-1/2">
                <Image
                  src={project.banner}
                  width={550}
                  height={550}
                  className="bottom-0 overflow-hidden"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between p-4 text-start gap-4">
                <div className="flex flex-row place-items-center gap-2">
                  <Image src={project.logoUrl} width={36} height={36} />
                  <TextTitleMedium text={project.title} />
                </div>
                <TextBody60 text={project.subtitle} />

                <div className="flex flex-row gap-4">
                  {project.technologies}
                </div>

                <div className="flex flex-row gap-2 self-end">
                  <Button>Detail</Button>
                  <Button>View</Button>
                </div>
              </div>
            </CardSurface>
          ))}
        </div>
      </section>

      <section className="w-full my-24 flex flex-col gap-2 place-items-center lg:px-10 xl:px-28 2xl:px-0 2xl:w-1/2 text-center">
        <TextTitleMedium text={dict.brands.brandsTitle} />
        <TextBody60 text={dict.brands.brandsDescription} />
        <div className="grid grid-cols-3 gap-10 lg:px-10 xl:px-28 2xl:px-0 place-content-center w-full place-items-center mt-4">
          <BrandContainer
            src="/brand_realtyna.png"
            srcDark="/brand_realtyna_dark.png"
            url="https://realtyna.com"
            title={dict.brands.realtyna}
          />
          <BrandContainer
            src="/brand_listings.png"
            srcDark="/brand_listings_dark.png"
            url="https://listings.com"
            title={dict.brands.listings}
          />
          <BrandContainer
            src="/brand_reveali.png"
            srcDark="/brand_reveali_dark.png"
            url="https://reveali.com"
            title={dict.brands.reveali}
          />
          <BrandContainer
            src="/brand_ut.png"
            url="https://ut.ac.ir"
            title={dict.brands.ut}
          />
          <BrandContainer
            src="/brand_cysp.png"
            url="https://cysp.ut.ac.ir"
            title={dict.brands.cysp}
          />
          <BrandContainer
            src="/brand_ismvip.png"
            url="https://ismvip.ir"
            title={dict.brands.ismvip}
          />
          <BrandContainer
            src="/brand_ashmore_alexander.png"
            url="https://ashmorealexander.com"
            title={dict.brands.ashmoreAlexander}
          />
          <BrandContainer
            src="/brand_urban_acres.png"
            url="https://urbanacres.com"
            title={dict.brands.urbanAcres}
          />
          <BrandContainer
            src="/brand_land2legacy.png"
            url="https://land2legacy.com"
            title={dict.brands.land2legacy}
          />
        </div>
      </section>

      <section className="w-full my-10 flex flex-col gap-2 place-items-center text-center">
        <TextTitleMedium text="بازخوردها درباره من" />
        <TextBody60 text="همکاران، مشتریان و عزیزانی که مدتی با هم همکاری داشتیم و متشکر از لطف و محبت آن‌ها هستم." />
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all w-full mt-4">
          <div className="absolute bottom-0 left-0 z-10 w-full h-[400px] bg-gradient-to-t from-white via-white/30 dark:from-black dark:via-black/30" />
          <CardSurface classname="p-4 mb-4 z-0 break-inside-avoid-column">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
            <TextBody60 text={dict.about.shortDescription} />
          </CardSurface>

          <div className="absolute flex justify-center bottom-0 left-0 right-0 z-20 mb-10">
            <Button as={Link} href="#" variant="bordered">
              Show More
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
