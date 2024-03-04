import Link from "next/link";
import PageContainer from "../../components/container/PageContainer";
import { getDictionary } from "../dictionaries";

export default async function NotFound({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <PageContainer language={lang}>
      <div className="">
        <div className="space-y-2">
          <h1 className="text-xl">{dict.notFound.title}</h1>
          <h2>{dict.notFound.description}</h2>
          <div>
            <Link href={`/${lang}`}>{dict.notFound.backToHome}</Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
