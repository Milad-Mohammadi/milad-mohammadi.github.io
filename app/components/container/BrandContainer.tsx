"use client";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useTheme } from "next-themes";

type BrandContainerData = {
  src: string;
  srcDark?: string;
  url: string;
  title: string;
};

export const BrandContainer = ({ src, srcDark, url }: BrandContainerData) => {
  const { theme } = useTheme();
  const image = theme == "dark" && srcDark ? srcDark : src;
  return (
    <Link
      href={url}
      className="flex content-center justify-center items-center"
      target="_blank"
    >
      <Image width={100} height={100} src={image} alt={title} />
    </Link>
  );
};
