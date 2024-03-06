import {TouchableOpacityProps} from 'react-native';

import {buttonTestId} from './__mocks__/button.testID';
import {theme} from '../../themes/theme';
import Text from '../text/Text';
import {textTypes} from '../text/textType';
import {
  ButtonDisabled,
  ButtonSecondary,
  GradientButton,
  ButtonComp,
  ActivityIndicatorStyle,
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

const Button = ({
  title,
  type,
  disabled,
  loading,
  margin,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text
        testID={buttonTestId.BUTTON_TITLE}
        type={textTypes.BUTTON_BOLD}
        color={color}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicatorStyle
          testID={buttonTestId.BUTTON_LOADING}
          color={theme.colors.whiteTheme.white}
        />
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled
        testID={buttonTestId.BUTTON_DISABLE}
        {...props}
        margin={margin}>
        {renderText(theme.colors.whiteTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonTheme.secondary:
      return (
        <ButtonSecondary
          testID={buttonTestId.BUTTON_SECONDARY}
          {...props}
          margin={margin}
          onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.main)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonTheme.primary:
    default:
      return (
        <ButtonComp
          testID={buttonTestId.BUTTON_DEFAULT}
          margin={margin}
          {...props}
          onPress={onPress}>
          <GradientButton
            start={{x: 0, y: 0}}
            end={{x: 1, y: 2}}
            colors={[
              theme.colors.blue80.blue80,
              '#12D8FA',
              theme.colors.blue80.blue80,
            ]}>
            {renderText(theme.colors.whiteTheme.white)}
          </GradientButton>
        </ButtonComp>
      );
  }
};

export default Button;
