import { View, Button, StyleSheet, TextInputChangeEventData } from 'react-native'
import { ImagemLog, StyleContLogin } from '../styles/login.style'
import Input from '../../shared/components/input/input'
import Buttonn from '../../shared/components/button/Button'
import Text from '../../shared/components/text/Text'
import { textTypes } from '../../shared/components/text/textType'
import { theme } from '../../shared/themes/theme'
import { Icon } from '../../shared/icon/icon'
import { DisplayFlexColumn } from '../../shared/components/globalView.style.css/globalView.style'
import axios from 'axios'
import { useState } from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const {
        email,
        password,
        loading,
        erroMsg,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword
    } = useLogin()

    return (
        <View>
            <StyleContLogin>
                <ImagemLog style={styles.imgEducar} resizeMode='center' source={require('../../../assets/image/logoEducarNovo.png')}></ImagemLog>
                <Input value={email} errorMsg={erroMsg} placeholder="Digite seu email" title='Email' onChange={handleOnchangeEmail} />
                <Input secureTextEntry errorMsg={erroMsg} value={password} placeholder="Digite sua Senha" title='Senha' onChange={handleOnchangePassword}></Input>
                <Buttonn loading={loading} margin='8px' title='ENTRAR' onPress={handleOnPress}></Buttonn>
            </StyleContLogin>
        </View>
    )
}

const styles = StyleSheet.create({
    imgEducar: {
        height: '15%'
    },
})


export default Login;