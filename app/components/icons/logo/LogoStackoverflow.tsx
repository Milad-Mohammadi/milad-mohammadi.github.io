import { IconType } from "../IconType";

export const LogoStackoverflow = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `fill-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:fill-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size ? size : 24}
      className={classnames}
    >
      <path d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z" />
      <path d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z" />
    </svg>
  );
};
