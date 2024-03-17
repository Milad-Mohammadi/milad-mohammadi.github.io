import Link from "next/link";
import PageContainer from "../../components/container/PageContainer";
import { getDictionary } from "../dictionaries";
import TextTitleLarge from "@/app/components/text/TextTitleLarge";
import TextTitleSmall from "@/app/components/text/TextTitleSmall";
import { Button } from "@nextui-org/react";

export default async function NotFound({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <PageContainer language={lang}>
      <div className="space-y-6 min-max py-64 w-full flex flex-col items-center">
        <TextTitleLarge text={dict.notFound.title} />
        <TextTitleSmall text={dict.notFound.description} />
        <div>
          <Button as={Link} href={`/${lang}`} radius="sm" variant="bordered">
            {dict.notFound.backToHome}
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
