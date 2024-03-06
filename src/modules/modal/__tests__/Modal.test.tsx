import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import Modal from '../Modal';
import {modalTestId} from '../__mocks__/modal.testID';

describe('Modal', () => {
  it('deve renderizar o modal true', () => {
    render(
      <Modal
        title="exemplo"
        text="text example"
        onCloseModal={() => {}}
        visible={true}
        trueOrMot={true}
      />,
    );

    const modalTitle = screen.getByText('exemplo');
    const modalText = screen.getByText('text example');

    expect(modalTitle).toBeDefined();
    expect(modalText).toBeDefined();
  });

  it('deve renderizar o modal false', () => {
    render(
      <Modal
        title="exemplo"
        text="text example"
        onCloseModal={() => {}}
        visible={true}
        trueOrMot={false}
      />,
    );

    const modalTitle = screen.getByText('exemplo');
    const modalText = screen.getByText('text example');

    expect(modalTitle).toBeDefined();
    expect(modalText).toBeDefined();
  });

  it('deve chamar onPress quando o botão é pressionado', async () => {
    const onCloseModal = jest.fn();

    const {getByTestId} = render(
      <Modal
        title="Exemplo"
        text="Isso é um exemplo"
        onCloseModal={onCloseModal}
        visible={true}
        trueOrMot={true}
      />,
    );

    // Encontra o Pressable pelo testID
    const pressable = getByTestId(modalTestId.MODAL_BUTID);

    // Dispara o evento de pressionar no Pressable
    fireEvent.press(pressable);

    // Aguarda um momento para garantir que o evento onPress seja chamado
    await waitFor(() => {
      // Verifica se a função onCloseModal foi chamada
      expect(onCloseModal).toHaveBeenCalled();
    });
  });
});
