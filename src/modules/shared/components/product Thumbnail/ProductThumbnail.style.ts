import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface ContProps {
    margin?: string
}

export const ProductThumbnailCont = styled.TouchableOpacity<ContProps> `
    height: 172px;
    border-radius: 4px;
    width: 120px;
    border: 1px solid ${theme.colors.grayTheme.gray};
    padding: 8px;

    margin: ${(props) => props.margin || '0px'};
`

export const ImagemLog = styled.Image`
    width: 100%;
    height: 50px;
    margin-bottom: 8px;

    border-radius: 4px;
`