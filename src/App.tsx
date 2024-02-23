import { SafeAreaView } from 'react-native'
import Login from './modules/login';
import { Provider} from 'react-redux';
import { store } from "./store/index";
import Modal from './modules/modal/Modal';
import Button from './modules/shared/components/button/Button';
import { useState } from 'react';
import GlobalModal from './modules/modal/globalModal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
            <GlobalModal />
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
            </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;