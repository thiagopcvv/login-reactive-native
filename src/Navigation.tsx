import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./modules/shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";
import CreateUser from "./modules/screens";



const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name={MenuUrl.LOGIN} component={Login} />
                <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: 'Criar Usuário' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;