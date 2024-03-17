import { IconType } from "../IconType";

export const IconArrowDown = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `stroke-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:stroke-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 16}
      className={classnames}
    >
      <path
        d="M18.0699 14.4299L11.9999 20.4999L5.92993 14.4299"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5V20.33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
