import PageContainer from "./PageContainer";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <PageContainer language={lang}>
      <div className="min-h-screen">{dict.order_project}</div>
    </PageContainer>
  );
}
