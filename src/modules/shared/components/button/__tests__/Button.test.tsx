/* eslint-disable react/react-in-jsx-scope */
import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from '../Button';
import {View as MockView} from 'react-native';
import {ReactNode} from 'react';
import {buttonTestId} from '../__mocks__/button.testID';
import {theme} from '../../../themes/theme';

const MockOnPress = jest.fn();

jest.mock('react-native-linear-gradient', () => {
  return ({children}: {children: ReactNode}) => {
    return <MockView>{children}</MockView>;
  };
});

describe('Button', () => {
  beforeEach(() => {
    render(
      <Button
        title="Test"
        testID={buttonTestId.BUTTON_DEFAULT}
        onPress={MockOnPress}
      />,
    );
  });

  it('deve renderizar o botão', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_DEFAULT);
    expect(button).toBeDefined();
  });

  it('deve renderizar o titúlo do botao', () => {
    const title = screen.getByTestId(buttonTestId.BUTTON_TITLE);

    expect(title).toBeDefined();
  });

  it('deve renderizar o titúlo do botao pelo texto', () => {
    const title = screen.getByText('Test');

    expect(title).toBeDefined();
  });

  it('deve chamar o onPress', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_DEFAULT);
    fireEvent.press(button);

    expect(MockOnPress).toHaveBeenCalled();
  });

  it('deve ocultar o loading', () => {
    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });

  it('deve renderizar o loading', () => {
    render(
      <Button
        title="Test"
        testID={buttonTestId.BUTTON_DEFAULT}
        onPress={MockOnPress}
        loading
      />,
    );

    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(1);
  });

  it('deve renderizar o botão secondary', () => {
    render(
      <Button
        title="Test"
        type={theme.buttons.buttonTheme.secondary}
        onPress={MockOnPress}
      />,
    );

    const button = screen.getByTestId(buttonTestId.BUTTON_SECONDARY);
    expect(button).toBeDefined();
  });

  it('deve renderizar o botão disable', () => {
    render(<Button title="Test" disabled onPress={MockOnPress} />);

    const button = screen.getByTestId(buttonTestId.BUTTON_DISABLE);
    expect(button).toBeDefined();
  });
});
