import styled from "styled-components/native"
import { theme } from "../../themes/theme"

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