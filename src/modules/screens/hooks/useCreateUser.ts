import {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {CreateUserType} from '../createUserType';
import {useRequest} from '../../shared/hooks/useRequest';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {USER_URL} from '../../shared/constants/urls';
import {MenuUrl} from '../../shared/enums/MenuUrl.enum';
import {MetheodEnum} from '../../../enums/metheods';
import {validateCpf} from '../../shared/functions/cpf';
import {validatePhone} from '../../shared/functions/phone';
import {validateEmail} from '../../shared/functions/email';

export const CREATEUSER_DEFAULT = {
  name: '',
  phone: '',
  email: '',
  cpf: '',
  password: '',
  confirmPassword: '',
};

export const useCreateUser = () => {
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();
  const {request, loading} = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [createUser, setCreateUser] =
    useState<CreateUserType>(CREATEUSER_DEFAULT);

  useEffect(() => {
    if (
      createUser.name !== '' &&
      createUser.cpf !== '' &&
      createUser.email !== '' &&
      createUser.phone !== '' &&
      createUser.password !== '' &&
      validateCpf(createUser.cpf) &&
      validatePhone(createUser.phone) &&
      validateEmail(createUser.email) &&
      createUser.confirmPassword === createUser.password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: USER_URL,
      metheod: MetheodEnum.POST,
      body: createUser,
      message: 'Cadastrado com Successo',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{name: MenuUrl.LOGIN}],
      });
    }
  };

  const handleOnChangle = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setCreateUser(currentUser => ({
      ...currentUser,
      [name]: event.nativeEvent.text,
    }));
  };

  return {
    createUser,
    handleOnChangle,
    handleCreateUser,
    loading,
    disabled,
  };
};
