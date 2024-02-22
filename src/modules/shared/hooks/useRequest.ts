import { useState } from "react"
import { RequestLogin } from "../types/requestLogin"
import { connectionAPIpost } from "../functions/connection/connectionAPI"
import { ReturnLogin } from "../types/returnLogin"
import { userType } from "../types/userType"

export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')
    const [user, setUser] = useState<userType>()

    const authRequest = async (body: RequestLogin) => {
        setLoading(true)
        const x = await connectionAPIpost<ReturnLogin>('http://192.168.100.179:8080/auth', body).then((result) => {
            setUser(result.user);
        }).catch(() => setErro('Email ou senha inválidos'))
        setLoading(false)

        setLoading(false)
    }

    return {
        loading,
        erroMsg,
        user,
        authRequest,
        setErro
    }

}