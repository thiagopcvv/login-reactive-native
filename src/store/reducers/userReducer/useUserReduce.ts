import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hoooks/hook';
import { setUser } from '.';
import { userType } from '../../../modules/shared/types/userType';

export const useUserReductor = () => {
    const dispatch = useDispatch()
    const { user } = useAppSelector((state)  => state.user);
    const setUserA = (currentUser: userType) => {
        dispatch(setUser(currentUser));
    }

    return {
        user,
        setUserA
    }
}