import { SafeAreaView } from 'react-native'
import Login from './modules/login';
import Modal from './modules/modal/Modal';
import { Provider} from 'react-redux';
import { store } from "./store/index";

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView>
                <Modal></Modal>
                <Login />
            </SafeAreaView>
        </Provider>
    )
}

export default App;