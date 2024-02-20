import {View, Button} from 'react-native'
import { StyleContLogin } from '../styles/login.style'
import Input from '../../shared/components/input/input'
import Buttonn from '../../shared/components/button/Button'
import Text from '../../shared/components/text/Text'
import { textTypes } from '../../shared/components/text/textType'

const Login = () => {
    const handleOnPress = () => {
        console.log('sds')
    }

    return(
        <View>
            <StyleContLogin>
            <Text type={textTypes.TITLE_BOLD}>Login</Text>
            <Input />
            <Buttonn margin='8px' title='ENTRAR' onPress={handleOnPress}></Buttonn>
            </StyleContLogin>
        </View>
    )
}

export default Login;