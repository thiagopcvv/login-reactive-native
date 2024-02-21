import { useState } from 'react';
import {SafeAreaView} from 'react-native'
import Login from './modules/login';
import Modal from './modules/modal/Modal';
import Button from './modules/shared/components/button/Button';

const App = () => {
    return(
        <SafeAreaView>
            <Modal></Modal>
            <Login/>
        </SafeAreaView>
    )
}

export default App;