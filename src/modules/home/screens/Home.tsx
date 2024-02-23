import { SafeAreaView } from "react-native-safe-area-context"
import Text from "../../shared/components/text/Text"
import { InputCont } from "../../shared/components/input/input.style"

const Home = () => {
    return(
        <SafeAreaView>
        <Text>Matheus Viado</Text>
            <InputCont></InputCont>
        </SafeAreaView>
    )
}

export default Home