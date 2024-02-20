import { TouchableOpacityProps } from "react-native";
import { ButtonComp } from "./button.style";
import Textt from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";

interface ButtonProps extends TouchableOpacityProps{
    title: string
    margin?: string
}

const Button = ({title, margin, ...props}: ButtonProps) => {
    return(
        <ButtonComp margin={margin} {...props}>
            <Textt type={textTypes.BUTTON_BOLD} color={theme.colors.whiteTheme.white}>{title}</Textt>
        </ButtonComp>
    )
}

export default Button;