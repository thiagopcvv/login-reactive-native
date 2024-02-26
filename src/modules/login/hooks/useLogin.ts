import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import ConnectionAPI, { connectionAPIpost } from "../../shared/functions/connection/connectionAPI"
import { useRequest } from "../../shared/hooks/useRequest"
import { RootState } from "../../../store";
import { useSelector } from 'react-redux'
import { useUserReductor } from "../../../store/reducers/userReducer/useUserReduce";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../shared/enums/MenuUrl.enum";

export const useLogin = () => {
    const {navigate} = useNavigation<NavigationProp<ParamListBase>>()
    const { user } = useUserReductor()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { authRequest, erroMsg, loading, setErro } = useRequest()
    const handleOnPress = async () => {
        authRequest({
            email,
            password,
        })
    }

    const handleToCreateUser = () => {
        navigate(MenuUrl.CREATE_USER)
    }

    const handleOnchangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErro('')
        setEmail(e.nativeEvent.text)
    }

    const handleOnchangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErro('')
        setPassword(e.nativeEvent.text)
    }

    return {
        email,
        password,
        loading,
        erroMsg,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword,
        handleToCreateUser
    }
}