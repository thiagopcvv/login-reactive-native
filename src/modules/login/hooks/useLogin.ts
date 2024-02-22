import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import ConnectionAPI, { connectionAPIpost } from "../../shared/functions/connection/connectionAPI"
import { useRequest } from "../../shared/hooks/useRequest"
import { RootState } from "../../../store";
import {useSelector} from 'react-redux'

export const useLogin = () => {
    const user = useSelector((state: RootState) => state.user)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {authRequest, erroMsg, loading, setErro} = useRequest()
    const handleOnPress = async() => {
        authRequest({
            email,
            password,
        })
    }

    console.log(user)

    const handleOnchangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErro('')
        setEmail(e.nativeEvent.text)
    }

    const handleOnchangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErro('')
        setPassword(e.nativeEvent.text)
    }

    return{
        email,
        password,
        loading,
        erroMsg,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword
    }
}