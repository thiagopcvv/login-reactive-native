import { TextInputProps, View } from "react-native"
import { InputCont } from "./input.style";
import { DisplayFlexColumn } from "../globalView.style.css/globalView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";

interface InputProps extends TextInputProps {
    title?: string
    errorMsg?: string
}

const input = ({title, errorMsg, ...props }: InputProps) => {
    return(
        <DisplayFlexColumn>
        {title && (
            <Text margin="0px 0px 10px 5px" color={theme.colors.mainTheme.main}>{title}</Text>
            )} 
        <InputCont isError={!!errorMsg} {...props}><Text color={theme.colors.grayTheme.gray}></Text></InputCont>
        {errorMsg && (
            <Text type={textTypes.PARAGRAPH_LIGHT} margin="0px 0px 0px 8px" color={theme.colors.orangeTheme.orange}>
                {errorMsg}
            </Text>
        )}
        </DisplayFlexColumn>
    )
}

export default input;

