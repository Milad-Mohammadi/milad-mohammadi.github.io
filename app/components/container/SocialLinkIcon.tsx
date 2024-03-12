import Link from "next/link";
import { ReactNode } from "react";

type SocialLinkData = { icon: ReactNode; url: string };

export const SocialLinkIcon = ({ icon, url }: SocialLinkData) => {
  return (
    <Link href={url} className="flex items-center">
      {icon}
    </Link>
  );
};
