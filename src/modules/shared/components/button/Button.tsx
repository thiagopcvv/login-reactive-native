import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textType';
import {
  ButtonDisabled,
  ButtonSecondary,
  GradientButton,
  ButtonComp,
  ActivityIndicatorStyle
} from './button.style';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, disabled, loading, margin, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicatorStyle color={theme.colors.whiteTheme.white}/>}
        
    
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.whiteTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonTheme.secondary:
      return (
        <ButtonSecondary
        
          {...props}
          margin={margin}
          onPress={handleOnPress}
        >
          {renderText(theme.colors.mainTheme.main)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonTheme.primary:
    default:
      return (
          <ButtonComp margin={margin} {...props} onPress={onPress}>
            <GradientButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 2 }} colors={[theme.colors.blue80.blue80, '#12D8FA', theme.colors.blue80.blue80]}>
                {renderText(theme.colors.whiteTheme.white)}
            </GradientButton>
          </ButtonComp>
      );
  }
};

export default Button;
              