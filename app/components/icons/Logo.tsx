import { IconType } from "./IconType";

export const Logo = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `fill-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:fill-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`

  return (
    <svg
      width={size ? size : 24}
      viewBox="0 0 92 74"
      fill="none"
      className={classnames}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M36 74H56.2376L73 0H51.7403L36 74Z" />
      <path d="M56 74H35.7624L19 0H40.2597L56 74Z" />
      <path d="M67.5 46.5L77 4L91.5 74H67.5V46.5Z" fillOpacity="0.8" />
      <path d="M24.5 46.5L15 4L0.5 74H24.5V46.5Z" fillOpacity="0.8" />
    </svg>
  );
};
