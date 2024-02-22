import { TextInputProps, View } from "react-native"
import { useState } from "react";
import { InputCont, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalView.style.css/globalView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";

interface InputProps extends TextInputProps {
    title?: string
    errorMsg?: string
    secureTextEntry?: boolean
}

const input = ({ title, errorMsg, secureTextEntry, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)
    const handleOnPress =() =>{
        setCurrentSecure((current) =>  !current);
    }

    return (
        <DisplayFlexColumn>
            {title && (
                <Text margin="0px 0px 5px 5px" color={theme.colors.mainTheme.main} type={textTypes.PARAGRAPH_BOLD}>{title}</Text>
            )}
            <View>
                <InputCont secureTextEntry={currentSecure} isError={!!errorMsg} {...props}></InputCont>
               {secureTextEntry && <IconEye onPress={handleOnPress} name={currentSecure ? "eye" : "eye-blocked"} size={18} />}
            </View>
            {errorMsg && (
                <Text type={textTypes.PARAGRAPH_LIGHT} margin="0px 0px 0px 8px" color={theme.colors.orangeTheme.orange}>
                    {errorMsg}
                </Text>
            )}
        </DisplayFlexColumn>
    )
}

export default input;

