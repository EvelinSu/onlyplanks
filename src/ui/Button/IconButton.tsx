import styled from "styled-components";
import { Property } from "csstype";


type StyledIconButtonPropsType = {
    opacity: Property.Opacity,
    margin: Property.Margin,
    padding: Property.Padding,
    right: Property.Right
}
export const IconButton = styled.div<StyledIconButtonPropsType>(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: props.opacity,
    margin: props.margin,
    padding: props.padding,
    transition: '0.2s',
    transitionProperty: 'transform',
    '&:hover': {
        transform: 'scale(0.92)',
    },
    ...props.right && {
        marginLeft: 'auto',
    }

}))
