import { TouchableOpacityProps } from "react-native";
import { ButtonComp, ButtonPrimary, ButtonSecondary, GradientButton, ActivityIndicatorStyle, ButtonDisabled } from "./button.style";
import Textt from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps extends TouchableOpacityProps {
    title: string
    margin?: string
    type?: string
    disabled?: boolean
    loading?: boolean
    onePrass?: () => void
}

const Button = ({ title, type, margin, disabled, loading, onPress, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disabled && onPress) {
            onPress()
        }
    }

    const renderText = (color: string) => (
        <>
            <Textt type={textTypes.BUTTON_BOLD} color={color}>{title}</Textt>
            {loading && <ActivityIndicatorStyle color={theme.colors.whiteTheme.white} />}
        </>
    )

    if (disabled) {
        {console.log('entreiButton')}
        <ButtonDisabled {...props} margin={margin} disabled>
            {renderText(theme.colors.orangeTheme.orange)}
        </ButtonDisabled>
    }

    switch (type) {
        case theme.buttons.buttonTheme.secondary:
            return (
                <ButtonSecondary  {...props} margin={margin} onPress={handleOnPress}>
                    {renderText(theme.colors.mainTheme.main)}
                </ButtonSecondary>
            )

        case theme.buttons.buttonTheme.primary:
            return (
                <ButtonPrimary margin={margin} {...props} onPress={onPress}>
                    {renderText(theme.colors.whiteTheme.white)}

                </ButtonPrimary>
            )
        default:
            return (
                <ButtonComp margin={margin} {...props} onPress={onPress}>
                    <GradientButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 2 }} colors={[theme.colors.blue80.blue80, '#12D8FA', theme.colors.blue80.blue80]}>
                        {renderText(theme.colors.whiteTheme.white)}
                    </GradientButton>
                </ButtonComp>
            )
    }


}

export default Button;