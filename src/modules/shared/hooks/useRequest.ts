import { useState } from "react"
import { RequestLogin } from "../types/requestLogin"
import ConnectionAPI, { MetheodType, connectionAPIpost, connectionAPIget } from "../functions/connection/connectionAPI"
import { ReturnLogin } from "../types/returnLogin"
import { userType } from "../types/userType"
import { useDispatch } from 'react-redux'
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { MenuUrl } from "../enums/MenuUrl.enum"
import { setAuthorizationKey } from "../functions/connection/auth"
import { userReducer } from "../../../store/reducers/userReducer"
import { useUserReductor } from "../../../store/reducers/userReducer/useUserReduce"
import { useGlobalReducerTrue } from "../../../store/reducers/modalTrueReducer/useGlobalReducerTRUE"

interface requestProps<T, B = unknown>{
    url: string
    metheod: MetheodType
    saveGlobal?: (object: T) => void
    body?: B
    message?: string
}


export const useRequest = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>()
    const {setUserA} = useUserReductor()
    const { setModal } = useGlobalReducer()
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')

    const request = async <T, B = unknown>({
        url,
        metheod,
        saveGlobal,
        body,
        message,}: requestProps<T, B>): Promise<T | undefined>  => {
         const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, metheod, body).then((result) => {
            if(saveGlobal){
                console.log('Save Global')
                saveGlobal(result)
            }
            if(message){
                setModal({
                    visible: true,
                    title: 'SUCESSO',
                    text: message,
                    trueOrMot: true
                })
            }
            
            return(result)
        })
        .catch((error: Error) => {
            console.log("Usuário não encontrado no storage: ", error);
            return undefined
        })
        setLoading(false)
        return returnObject;
    }



    const authRequest = async (body: RequestLogin) => {
        setLoading(true)
        await connectionAPIpost<ReturnLogin>('http://192.168.100.179:8080/auth', body)
        .then((result) => {
            setAuthorizationKey(result.accessToken)
            setUserA(result.user);
            reset({
                index: 0,
                routes: [{ name: MenuUrl.HOME }],
            })
        }).catch(() => {
            setModal({
                visible: true,
                title: 'ERRO',
                text: 'Email ou senha incorretos',
                trueOrMot: false
            })

        })

        setLoading(false)

    }

    return {
        loading,
        erroMsg,
        request,
        authRequest,
        setErro,
    }

}