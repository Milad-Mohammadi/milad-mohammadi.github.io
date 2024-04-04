import { User } from "@nextui-org/react";
import CardSurface from "./CardSurface";
import TextBody70 from "../text/TextBody70";

interface CommentContainerProps {
  name: string;
  title: string;
  image: string;
  comment: string;
  language: "en" | "fa";
}

const CommentContainer: React.FC<CommentContainerProps> = ({
  name,
  title,
  image,
  comment,
  language,
}) => {
  return (
    <CardSurface
      classname="p-4 mb-4 z-0 break-inside-avoid-column"
      language={language}
    >
      <User name={name} description={title} avatarProps={{ src: image }} />
      <TextBody70 text={comment} className="mt-2 text-justify md:text-start" />
    </CardSurface>
  );
};

export default CommentContainer;
