import styled from "styled-components";
import { Property } from "csstype";
import { ReactNode } from "react";

export type StyledBoxProps = {
    direction: Property.FlexDirection,
    align: Property.AlignItems,
    borderRadius: Property.BorderRadius<number>,
    justify: Property.JustifyContent,
    gap: Property.RowGap<number>,
    margin: Property.Margin,
    padding: Property.Padding,
    bgColor: Property.BackgroundColor,
    border: Property.Border,
    maxWidth: Property.MaxWidth<number>,
    color: Property.Color,
    width: Property.Width,
    height: Property.Height,
    opacity: Property.Opacity,
    overflow: Property.Overflow,
    addSize: Property.FontSize,
    wrap: Property.FlexWrap,
    transition: Property.Transition,
    grow: Property.FlexGrow,
    cursor: Property.Cursor,
    isClickable: boolean,
    isActive: boolean,
    bgColorByActive: string,
    stylized: boolean,
    zIndex: number;
    
    children: ReactNode | JSX.Element;
}
export const StyledBox = styled.div<Partial<StyledBoxProps>>(({ theme, ...props }) => ({
    display: "flex",
    flexDirection: props.direction || "row",
    alignItems: props.align,
    justifyContent: props.justify,
    gap: props.gap || 20,
    rowGap: props.gap,
    margin: props.margin,
    padding: props.padding,
    backgroundColor: props.bgColor,
    border: props.border,
    borderRadius: props.borderRadius,
    maxWidth: props.maxWidth,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    overflow: props.overflow,
    flexGrow: props.grow,
    flexWrap: props.wrap,
    columnGap: props.gap,
    transition: props.transition,
    cursor: props.cursor,
    ...props.stylized && {
        padding: 15,
        borderRadius: 10,
        backgroundColor: props.bgColor || theme.colors.primary,
        "&:hover": {
            backgroundColor: props.bgColorByActive || theme.colors.primaryLight,
        },
    },

}))