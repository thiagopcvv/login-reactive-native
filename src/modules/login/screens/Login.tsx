import { View, Button } from 'react-native'
import { StyleContLogin } from '../styles/login.style'
import Input from '../../shared/components/input/input'
import Buttonn from '../../shared/components/button/Button'
import Text from '../../shared/components/text/Text'
import { textTypes } from '../../shared/components/text/textType'
import { theme } from '../../shared/themes/theme'
import { Icon } from '../../shared/icon/icon'

const Login = () => {
    const handleOnPress = () => {
        console.log('sds')
    }

    return (
        <View>
            <StyleContLogin>
                <Icon name='home3' size={25}></Icon>  
                <Text type={textTypes.TITLE_BOLD}>Login</Text>
                <Input errorMsg="Email inválido" placeholder="Digite seu email" title='Email' />
                <Buttonn margin='8px' title='ENTRAR' onPress={handleOnPress}></Buttonn>
            </StyleContLogin>
        </View>
    )
}

export default Login;