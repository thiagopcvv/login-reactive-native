import { TextProps as TextPropsNative } from 'react-native/types'
import { TextCont } from './text.style'
import { useMemo } from 'react'
import { textTypes } from './textType'

interface TextProps extends TextPropsNative {
    color?: string
    type?: string
}

const Text = ({ color, type, ...props }: TextProps) => {

    const handleSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_REGULAR:
            case textTypes.TITLE_LIGHT:
                return '24px'
            case textTypes.SUBTITLE_BOLD:
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.SUBTITLE_LIGHT:
                return '20px'
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.PARAGRAPH_LIGHT:
                return '10px'
            default:
                return '16px';
        }
    }, [type])

    const fontFamily = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.SUBTITLE_BOLD:
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.BUTTON_BOLD:
                return 'Poppins-Bold'
            case textTypes.TITLE_REGULAR:
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.BUTTON_MEDIUM:
                return 'Poppins-Medium'
            case textTypes.TITLE_LIGHT:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.BUTTON_LIGHT:
                return 'Poppins-Light'
            default:
                return 'Poppins-Medium';
        }
    }, [type])

    return (
        <TextCont fontFamily={fontFamily} fontSize={handleSize} color={color} {...props}></TextCont>
    )
}

export default Text;