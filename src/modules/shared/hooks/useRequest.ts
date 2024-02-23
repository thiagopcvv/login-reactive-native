import { useState } from "react"
import { RequestLogin } from "../types/requestLogin"
import { connectionAPIpost } from "../functions/connection/connectionAPI"
import { ReturnLogin } from "../types/returnLogin"
import { userType } from "../types/userType"
import {useDispatch} from 'react-redux'
import { setUser } from "../../../store/reducers/userReducer"
import { useUserReductor } from "../../../store/reducers/userReducer/useUserReduce"
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer"
import { useNavigation } from "@react-navigation/native"
import { setAuthorizationToken } from "../functions/connection/auth"
import { MenuUrl } from "../components/enums/MenuUrl.enum"

export const useRequest = () => {
    const {navigate} = useNavigation()
    const { setUserA } = useUserReductor()
    const { setModal } = useGlobalReducer()
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')

    const authRequest = async (body: RequestLogin) => {
        setLoading(true)
         await connectionAPIpost<ReturnLogin>('http://192.168.100.179:8080/auth', body).then((result) => {
            setAuthorizationToken(result.accessToken)
            setUserA(result.user);
            navigate(MenuUrl.HOME)
        }).catch(() => { 
            setModal('ERRO', 'Email ou senha inválidos')
        })

        setLoading(false)

    }

    return {
        loading,
        erroMsg,
        authRequest,
        setErro
    }

}