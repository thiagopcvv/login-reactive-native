import { View, Button, StyleSheet, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import { ImagemLog, StyleContLogin } from '../styles/login.style'
import Input from '../../shared/components/input/input'
import Buttonn from '../../shared/components/button/Button'
import { useLogin } from '../hooks/useLogin'
import Text from '../../shared/components/text/Text'
import { textTypes } from '../../shared/components/text/textType'

const Login = () => {
    const {
        email,
        password,
        loading,
        erroMsg,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword,
        handleToCreateUser
    } = useLogin()

    return (
        <View>
            <StyleContLogin>
                <ImagemLog style={styles.imgEducar} resizeMode='center' source={require('../../../assets/image/logoEducarNovo.png')}></ImagemLog>
                <Input value={email} errorMsg={erroMsg} placeholder="Digite seu email" title='Email' onChange={handleOnchangeEmail} />
                <Input secureTextEntry errorMsg={erroMsg} value={password} placeholder="Digite sua Senha" title='Senha' onChange={handleOnchangePassword}></Input>
                <TouchableOpacity onPress={handleToCreateUser}><Text margin='16px' color='#1FA2FF' type={textTypes.PARAGRAPH_BOLD}>Cadastrar Usuário</Text></TouchableOpacity>
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