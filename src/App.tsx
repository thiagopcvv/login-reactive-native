import { SafeAreaView } from 'react-native'
import Login from './modules/login';
import { Provider} from 'react-redux';
import { store } from "./store/index";
import Modal from './modules/modal/Modal';
import Button from './modules/shared/components/button/Button';
import { useState } from 'react';
import GlobalModal from './modules/modal/globalModal/GlobalModal';

const App = () => {
const [modalVisible, setModalVisible] = useState(false);
    return (
        <Provider store={store}>
            <SafeAreaView>
                <GlobalModal></GlobalModal>
                {/* <Modal onCloseModal={() => setModalVisible(false)} visible={modalVisible} title="entrar" text="Bem-vindo"></Modal> */}
                {/* <Button title='modal' onPress={() => setModalVisible(true)}></Button> */}
                <Login />
            </SafeAreaView>
        </Provider>
    )
}

export default App;