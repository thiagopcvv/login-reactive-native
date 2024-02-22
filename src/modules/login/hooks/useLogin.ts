import axios from "axios"
import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

export const useLogin = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [erroMsg, setErro] = useState<string>('')
    
    const handleOnPress = async() => {
        setLoading(true)
        const resultAxios =  await axios.post('http://172.26.224.1:8080/auth', {
            email,
            password
        }).catch(() =>  setErro('Email ou senha inválidos'))
        setLoading(false)
    }

    const handleOnchangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(e.nativeEvent.text)
    }

    const handleOnchangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
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