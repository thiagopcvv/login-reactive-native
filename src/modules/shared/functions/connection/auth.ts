import { AUTHORIZATION_KEY } from "../../../../constantes/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "../sotorageProxy";

export const unsertAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY)

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token)

export const getAuthorizationToken = async() => getItemStorage(AUTHORIZATION_KEY);