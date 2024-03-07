import {renderHook} from '@testing-library/react-native';
import {CREATEUSER_DEFAULT, useCreateUser} from '../useCreateUser';
import {act} from 'react-test-renderer';
import {mockCreateUser} from '../__mocks__/useCreateuser.mocks';

const mockReset = jest.fn();
const mockRequest = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    reset: mockReset,
  }),
}));

jest.mock('../../../shared/hooks/useRequest', () => ({
  useRequest: () => ({
    request: mockRequest,
    loading: false,
  }),
}));

describe('CreateUser', () => {
  it('deve retornar o createUser default', () => {
    const {result} = renderHook(() => useCreateUser());

    expect(result.current.createUser).toEqual(CREATEUSER_DEFAULT);
  });

  it('deve trocar o create User depois do onChangeInput', () => {
    const {result} = renderHook(() => useCreateUser());
    const mockText = 'fdlskja';

    const event: any = {
      nativeEvent: {
        text: mockText,
      },
    };

    act(() => {
      result.current.handleOnChangle(event, 'cpf');
    });

    expect(result.current.createUser.cpf).toEqual(mockText);
  });

  it('deve setar o disable depois de inserir tudo', () => {
    const {result} = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.confirmPassword,
          },
        } as any,
        'confirmPassword',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.confirmPassword,
          },
        } as any,
        'password',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.cpf,
          },
        } as any,
        'cpf',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.email,
          },
        } as any,
        'email',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.name,
          },
        } as any,
        'name',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.phone,
          },
        } as any,
        'phone',
      );
    });

    expect(result.current.disabled).toEqual(false);

    act(() => {
      result.current.handleOnChangle(
        {
          nativeEvent: {
            text: mockCreateUser.password,
          },
        } as any,
        'password',
      );
    });

    expect(result.current.disabled).toEqual(true);
  });

  it('deve chamar a resquest do createUser', () => {
    const {result} = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateUser();
    });

    expect(mockRequest).toHaveBeenCalled();
  });

  it('não deve chamar reset em criar usuário se retornar undefined', () => {
    const {result} = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateUser();
    });

    expect(mockReset).not.toHaveBeenCalled();
  });
});
