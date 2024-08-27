import { SvgIconPropsType } from "@/svg/common/types";

export const LockIcon = (props: SvgIconPropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={props.color || "#CCD2E3"}
        d="M4 13C4 11.1144 4 10.1716 4.58579 9.58579C5.17157 9 6.11438 9 8 9H16C17.8856 9 18.8284 9 19.4142 9.58579C20 10.1716 20 11.1144 20 13V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V13Z"
        strokeWidth="2"
      />
      <path
        stroke={props.color || "#CCD2E3"}
        d="M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="15"
        r="2"
        fill={props.color || "#CCD2E3"}
      />
    </svg>
  );
};
