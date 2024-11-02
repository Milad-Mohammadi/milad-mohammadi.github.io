 
Copy
// Projects.js (your original page component)
import { constants } from "../../../data/Constants";
import PageContainer from "@/app/components/container/PageContainer";
import ProjectsClient from "./ProjectsClient"; // Adjust the path as necessary
import { ProjectList } from "@/data/en/projectList";
import { ProjectListFa } from "@/data/fa/projectList";

export async function generateStaticParams() {
  return constants.locales.map((locale) => ({
    lang: locale
  }));
}

export default function Home({ params: { lang } }) {
  const allProjects = lang === "fa" ? "همه" : "All";
  const projects = lang === "en" ? ProjectList : ProjectListFa;
  const uniqueCategories = [...new Set(projects.map((item) => item.category))];

  return (
    <PageContainer language={lang}>
      <ProjectsClient lang={lang} projects={projects} allProjects={allProjects} uniqueCategories={uniqueCategories} />
    </PageContainer>
  );
}