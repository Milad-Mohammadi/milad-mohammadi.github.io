import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const direction = lang == "en" ? "ltr" : "rtl";

  return (
    <main
      dir={direction}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="min-h-screen">{dict.order_project}</div>
    </main>
  );
}
