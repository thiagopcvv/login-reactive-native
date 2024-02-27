import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./modules/shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";
import CreateUser from "./modules/screens";
import { Icon } from "./modules/shared/icon/icon";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { theme } from './modules/shared/themes/theme';
import Profile from './modules/profile/indext';
import Orders from './modules/order';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color}) => {
                    let iconName: string;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home'
                            break;
                            case 'Orders':
                            iconName = 'coin-dollar'
                            break;
                    
                        default:
                            iconName = 'profile'
                            break;
                    }

                    return <Icon name={iconName} size={14} color={color}></Icon>;
                },
                tabBarLabelStyle: {
                    marginBottom: 8
                },
                tabBarStyle: {
                    height: 52,
                    padding: 8,
                },
                tabBarActiveTintColor: theme.colors.blue80.blue80,
                tabBarInactiveTintColor: theme.colors.mainTheme.main,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Orders" component={Orders} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    )
}


const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name={MenuUrl.LOGIN} component={Login} />
                <Stack.Screen name={MenuUrl.HOME} component={TabNavigation} options={{headerShown: false}} />
                <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: 'Criar Usuário' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;