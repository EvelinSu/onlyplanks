import styled from "styled-components";

export type Props = {
    top?: boolean;
    bottom?: boolean;
}
export const StyledPagePanel = styled.div<Partial<Props>>(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    height: "50px",
    width: "100%",
    ...props.top && {
        borderTop: "1px solid rgba(0, 0, 0, 0.1)"
    },
    ...props.bottom && {
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    }
}));

export const StyledPanelPointBlockWrapper = styled.div({
    position: "relative",
    display: "flex",
    justifyContent: "flex-end"
})

export const StyledPanelPointBlockContainer = styled.div({
    position: "absolute",
})