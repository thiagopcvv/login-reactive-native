import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./modules/shared/components/enums/MenuUrl.enum";
// import Splash from "./modules/splash";


const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/> */}
                <Stack.Screen name={MenuUrl.LOGIN} component={Login} />
                <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;