import styled from "styled-components";
import { Property } from "csstype";

export type StyledButtonProps = {
    justify?: Property.JustifyContent;
    backgroundColor?: Property.BackgroundColor;
    borderRadius?: Property.BorderRadius;
    fontSize?: Property.FontSize;
    width?: Property.Width;
    bgColor?: Property.BackgroundColor;
    margin?: string | number;
    size?: 'sm' | 'md' | 'lg';
    isWithError?: boolean;
    isBold?: boolean;
}
export const StyledButton = styled.button<StyledButtonProps>(({
    theme,
    isBold,
    justify = "center",
    backgroundColor = theme.colors.brandColor,
    size = "md",
    bgColor,
    borderRadius = "10px",
    width = "min-content",
    margin = ""
}) => ({
    justifyContent: justify,
    width: width,
    margin: margin,
    fontWeight: isBold ? 600 : 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    border: "none",
    whiteSpace: "nowrap",
    textAlign: "center",
    transition: "0.2s",
    cursor: "pointer",
    gap: 10,
    columnGap: 10,
    rowGap: 10,
    "&:hover": {
        opacity: 0.7
    },
    borderRadius: borderRadius,
    ...size
        ? theme.sizes.button[size]
        : theme.sizes.button.md,
}))