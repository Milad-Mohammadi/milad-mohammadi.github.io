import { IconType } from "../IconType";

export const IconMenu = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `stroke-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:stroke-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 36}
      className={classnames}
    >
      <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
