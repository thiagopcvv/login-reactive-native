import { View, Button, StyleSheet } from 'react-native'
import { ImagemLog, StyleContLogin } from '../styles/login.style'
import Input from '../../shared/components/input/input'
import Buttonn from '../../shared/components/button/Button'
import Text from '../../shared/components/text/Text'
import { textTypes } from '../../shared/components/text/textType'
import { theme } from '../../shared/themes/theme'
import { Icon } from '../../shared/icon/icon'
import { DisplayFlexColumn } from '../../shared/components/globalView.style.css/globalView.style'

const Login = () => {
    const handleOnPress = () => {
        console.log('sds')
    }

    return (
        <View>
            <StyleContLogin>
                <ImagemLog style={styles.imgEducar} resizeMode='center' source={require('../../../assets/image/logoEducarNovo.png')}></ImagemLog>
                <Input errorMsg="Email inválido" placeholder="Digite seu email" title='Email' />
                <Input secureTextEntry placeholder="Digite sua Senha" title='Senha'></Input>
                <Buttonn margin='8px' title='ENTRAR' onPress={handleOnPress}></Buttonn>
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