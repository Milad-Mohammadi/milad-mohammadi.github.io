import { IconType } from "../IconType";

export const IconKotlin = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `fill-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:fill-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 278"
      role="img"
      width={size ? size : 16}
      className={classnames}
    >
      <title>Kotlin</title>
      <g
        fill="none"
        fillRule="evenodd"
        id="Page-1"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g fillRule="nonzero" id="twitter-profile-copy" strokeWidth="24">
          <g id="Group" transform="translate(11.000000, 14.000000)">
            <g id="kotlin-logo" transform="translate(3.000000, 0.000000)">
              <polygon
                id="Shape"
                points="0 0 125.518 0 0 131.998"
                className="stroke-onWhite dark:stroke-onBlack"
              ></polygon>
              <polygon
                id="Shape"
                points="0 250 125.338 124.444 250 250"
                className="stroke-onWhite dark:stroke-onBlack"
              ></polygon>
              <polygon
                id="Shape"
                points="125.518 0 0 131.998 0 250 125.338 124.442 250 0"
                className="stroke-onWhite dark:stroke-onBlack"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
