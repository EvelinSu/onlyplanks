import React, { FC } from 'react';
import { SvgIconPropsType } from "@/svg/types";

export const CloseRoundIcon: FC<SvgIconPropsType> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
