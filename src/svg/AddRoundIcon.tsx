import React, {FC} from 'react';
import { SvgIconPropsType } from "@/svg/types";

const AddRoundIcon: FC<SvgIconPropsType> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                stroke={props.color || '#CCD2E3'}
                d="M12 6L12 18"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                stroke={props.color || '#CCD2E3'}
                d="M18 12L6 12"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default AddRoundIcon;
