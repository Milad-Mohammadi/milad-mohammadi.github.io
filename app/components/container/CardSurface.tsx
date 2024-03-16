import { ReactNode } from "react";

interface CardSurfaceProps {
  children: ReactNode;
  language: "en" | "fa";
  classname: string;
}

const CardSurface: React.FC<CardSurfaceProps> = ({
  children,
  language,
  classname,
}) => {
  const direction = language == "en" ? "ltr" : "rtl";
  return (
    <div
      dir={direction}
      className={`bg-whiteSurface dark:bg-blackSurface rounded-xl border border-silver dark:border-0 shadow-md ${classname}`}
    >
      {children}
    </div>
  );
};

export default CardSurface;
