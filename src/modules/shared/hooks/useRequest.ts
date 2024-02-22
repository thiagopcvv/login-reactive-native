import { useState } from "react"
import { RequestLogin } from "../types/requestLogin"
import { connectionAPIpost } from "../functions/connection/connectionAPI"
import { ReturnLogin } from "../types/returnLogin"
import { userType } from "../types/userType"
import {useDispatch} from 'react-redux'
import { setUser } from "../../../store/reducers/userReducer"
import { useUserReductor } from "../../../store/reducers/userReducer/useUserReduce"
import GlobalModal from "../../modal/globalModal/GlobalModal"
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer"

export const useRequest = () => {
    const { setUserA } = useUserReductor()
    const { setModal } = useGlobalReducer()
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')

    const authRequest = async (body: RequestLogin) => {
        setLoading(true)
         await connectionAPIpost<ReturnLogin>('http://192.168.100.179:8080/auth', body).then((result) => {
            setUserA(result.user);
        }).catch(() => { 
            setModal({'Erro', 'Usuario senha inválido'})
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