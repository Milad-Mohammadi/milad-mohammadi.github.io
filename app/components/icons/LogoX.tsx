import { IconType } from "./IconType";

export const LogoX = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `fill-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:fill-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 24}
      className={classnames}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
};
