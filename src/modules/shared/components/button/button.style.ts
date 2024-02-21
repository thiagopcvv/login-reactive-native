import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonCompProps{
    margin?: string
}

export const ButtonComp = styled.TouchableOpacity<ButtonCompProps>`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
`

export const GradientButton = styled(LinearGradient)<ButtonCompProps>`
    width: 100%;
    height: 100%;        
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
`

export const ButtonPrimary = styled(ButtonComp)<ButtonCompProps>`
   background-color : ${theme.colors.blueTheme.blue};
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`

export const ButtonSecondary = styled(ButtonComp)<ButtonCompProps>`
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
    background-color: transparent;

    border-width: 1px;
    border-color: ${theme.colors.mainTheme.main};
`
export const ButtonDisabled = styled(ButtonComp)<ButtonCompProps>`
    background-color: #ccc!important;
`

export const ActivityIndicatorStyle = styled.ActivityIndicator<ButtonCompProps>` 
   margin-left: 10px;
`