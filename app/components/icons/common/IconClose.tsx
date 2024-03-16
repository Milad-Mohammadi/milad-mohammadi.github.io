import { IconType } from "../IconType";

export const IconClose = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `stroke-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:stroke-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 24}
      className={classnames}
    >
      <g id="Menu / Close_LG">
        <path
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
