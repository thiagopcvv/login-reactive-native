import { useState } from "react"
import { RequestLogin } from "../types/requestLogin"
import { connectionAPIpost } from "../functions/connection/connectionAPI"
import { ReturnLogin } from "../types/returnLogin"
import { userType } from "../types/userType"
import {useDispatch} from 'react-redux'
import { setUser } from "../../../store/reducers/userReducer"

export const useRequest = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')

    const authRequest = async (body: RequestLogin) => {
        setLoading(true)
         await connectionAPIpost<ReturnLogin>('http://192.168.100.179:8080/auth', body).then((result) => {
            dispatch(setUser(result.user));
        }).catch(() => { 
        setErro('Email ou senha inválidos')
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