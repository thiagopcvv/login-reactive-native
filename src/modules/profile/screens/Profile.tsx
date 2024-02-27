import { View } from "react-native";
import Text from "../../shared/components/text/Text";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import Button from "../../shared/components/button/Button";
import { logout } from "../../shared/functions/connection/auth";

const Profile = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()
    return(
        <View>
            <Text>Perfil</Text>
            <Button title="SAIR" onPress={() => logout(navigation)}></Button>

        </View>
    )
}

export default Profile;