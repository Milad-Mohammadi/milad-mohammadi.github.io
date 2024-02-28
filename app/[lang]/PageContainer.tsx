import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  language: "en" | "fa";
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  language,
}) => {
  const direction = language == "en" ? "ltr" : "rtl";
  return (
    <main
      dir={direction}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      {children}
    </main>
  );
};

export default PageContainer;
