import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hoooks/hook';
import { setModalActions } from '.';
import { GlobalModalType } from '../../../modules/modal/globalModal/GlobalModal';

export const useGlobalReducer = () => {
    const dispatch = useDispatch()
    const { modal } = useAppSelector((state)  => state.modal);

    const closeModal = () => {
        dispatch(
            setModalActions({
                ...modal,
                visible: false
            })
        )
    }

    const setModal = (currentModal: GlobalModalType) => {
        dispatch(setModalActions(currentModal))
    }


    return {
        modal,
        closeModal,
        setModal,
    }
}