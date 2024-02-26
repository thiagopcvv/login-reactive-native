import { NativeSyntheticEvent, TextInputProps, TextInputTextInputEventData, View } from "react-native"
import { useState } from "react";
import { InputCont, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalView.style.css/globalView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";
import { insertMaskInCpf } from "../../functions/cpf";
import { maskPhone } from "../../functions/phone";

interface InputProps extends TextInputProps {
    title?: string
    errorMsg?: string
    secureTextEntry?: boolean
    type?: 'cel-phone' | 'cpf'
}

const input = ({ title, errorMsg, secureTextEntry, onChange, type, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)
    const handleOnChange = (event: NativeSyntheticEvent<TextInputTextInputEventData>) => {
        if (onChange) {
            let text = event.nativeEvent.text;
            switch (type) {
                case 'cpf':
                    text = insertMaskInCpf(text)
                case 'cel-phone':
                    text = maskPhone(text)
                default:
                    text = event.nativeEvent.text;
                    break;
            }
            onChange({
                ...event,
                nativeEvent:{
                    ...event.nativeEvent,
                    text,
                    eventCount: 0,
                    target: 0
                },
            })
        }
    }
    const handleOnPress = () => {
        setCurrentSecure((current) => !current);
    }

    return (
        <DisplayFlexColumn>
            {title && (
                <Text margin="0px 0px 5px 5px" color={theme.colors.mainTheme.main} type={textTypes.PARAGRAPH_BOLD}>{title}</Text>
            )}
            <View>
                <InputCont secureTextEntry={currentSecure} isError={!!errorMsg} {...props} onChange={handleOnChange}></InputCont>
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

