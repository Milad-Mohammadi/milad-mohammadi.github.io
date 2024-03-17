import { IconType } from "../IconType";

export const IconJetpackCompose = ({ color, size, classname }: IconType) => {
  const onWhiteColor = `stroke-${color ? color : "onWhite"}`;
  const onBlackColor = `dark:stroke-${color ? color : "onBlack"}`;
  const extraClassnames = `${classname ? classname : ""}`;
  const classnames = `${onWhiteColor} ${onBlackColor} ${extraClassnames}`;

  return (
    <svg
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill="none"
      width={size ? size : 16}
      className={classnames}
    >
      <title>Jetpack Compose</title>
      <path
        d="M15 57.3938V120.844C15 127.147 18.2977 132.992 23.6935 136.251L80.2245 170.397C85.931 173.844 93.0753 173.855 98.792 170.425L155.761 136.243C161.183 132.99 164.5 127.131 164.5 120.809V57.4286C164.5 50.9784 161.049 45.0212 155.453 41.813L98.4829 9.15021C92.9216 5.9617 86.0841 5.9716 80.532 9.17617L24.002 41.8042C18.4316 45.0193 15 50.9622 15 57.3938Z"
        className="stroke-onWhite dark:stroke-onBlack"
        strokeWidth="13"
      />
      <path
        d="M59.6875 115.264L63.8661 108.442L59.6875 115.264L83.5976 129.909C88.0724 132.65 93.7042 132.658 98.1871 129.931L122.277 115.274C126.452 112.733 129 108.2 129 103.313V75.952C129 70.9654 126.348 66.3552 122.037 63.8489L97.9464 49.8431L94.042 56.5588L97.9464 49.8431C93.5836 47.3066 88.1933 47.3145 83.8379 49.8636L59.9282 63.8578C55.6371 66.3693 53 70.9684 53 75.9404V103.325C53 108.197 55.5329 112.719 59.6875 115.264Z"
        className="stroke-onWhite dark:stroke-onBlack"
        strokeWidth="15"
      />
      <path
        d="M18 49L61.5 73.5"
        className="stroke-onWhite dark:stroke-onBlack"
        strokeWidth="13"
      />
      <path
        d="M90.5 123.5V173"
        className="stroke-onWhite dark:stroke-onBlack"
        strokeWidth="13"
      />
      <path
        d="M120 73L162.5 47"
        className="stroke-onWhite dark:stroke-onBlack"
        strokeWidth="13"
      />
    </svg>
  );
};
