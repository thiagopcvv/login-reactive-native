import { SafeAreaView } from "react-native-safe-area-context"
import Text from "../../shared/components/text/Text"
import { InputCont } from "../../shared/components/input/input.style"
import Button from "../../shared/components/button/Button"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { logout } from "../../shared/functions/connection/auth"

const Home = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    return(
        <SafeAreaView>
        <Text>Matheus Viado</Text>
            <Button title="SAIR" onPress={() => logout(navigation)}></Button>
        </SafeAreaView>
    )
}

export default Home