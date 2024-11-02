import { getDictionary } from "../dictionaries";
import { constants } from "../../../data/Constants";

export async function generateStaticParams() {
  return constants.locales.map((locale) => ({
    locale,
  }));
}

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const direction = lang == "en" ? "ltr" : "rtl";

  return (
    <main
      dir={direction}
      className="flex flex-col items-center justify-between p-24"
    >
      <div className="">{dict.order_project}</div>
    </main>
  );
}
