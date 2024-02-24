import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { AUTORIZATION_KEY } from "../../constants/authConst";
import { getItemStorage, removeItemStorage, setItemStorage } from "../storageProxy";
import { MenuUrl } from "../../enums/MenuUrl.enum";

export const unsetAuthorizationKey = () => removeItemStorage(AUTORIZATION_KEY)

export const setAuthorizationKey = async (token: string) => setItemStorage(AUTORIZATION_KEY, token)

export const getAuthorizationToken = async () => getItemStorage(AUTORIZATION_KEY)

export const logout = (navigate: NavigationProp<ParamListBase>) => {
    unsetAuthorizationKey()

    navigate.reset({
        index: 0,
        routes: [{name: MenuUrl.LOGIN}]
    })
}