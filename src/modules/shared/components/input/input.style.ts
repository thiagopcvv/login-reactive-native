import styled from "styled-components/native"
import { theme } from "../../themes/theme"
import { Icon } from "../../icon/icon";

interface InputContprops {
        isError?: boolean;
}

export const InputCont = styled.TextInput<InputContprops>`
        height: 48px;
        width: 100%;
        padding: 16px;
        background-color: ${theme.colors.whiteTheme.white};
        color: #888;
        border-radius: 4px;
        border-width: 1px;
        border-color: ${(props) => props.isError ? theme.colors.orangeTheme.orange : theme.colors.grayTheme.gray};    
`

export const IconEye = styled(Icon)`
        position: absolute;
        right: 15px;
        top: 12px;
`

export const IconSeach = styled(Icon)`
        position: absolute;
        right: 15px;
        top: 16px;
`