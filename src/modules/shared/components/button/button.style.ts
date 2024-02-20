import styled from "styled-components/native";

interface ButtonCompProps{
    margin?: string
}

export const ButtonComp = styled.TouchableOpacity<ButtonCompProps>`
    background: #3688fc;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
`