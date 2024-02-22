import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import ConnectionAPI, { connectionAPIpost } from "../../shared/functions/connection/connectionAPI"
import { useRequest } from "../../shared/hooks/useRequest"

export const useLogin = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {authRequest, erroMsg, loading, user, setErro} = useRequest()
    const handleOnPress = async() => {
        authRequest({
            email,
            password,
        })
    }

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