import { AUTORIZATION_KEY } from "../../constants/authConst";
import { getItemStorage, removeItemStorage, setItemStorage } from "../storageProxy";

export const unsetAuthorizationKey = () => removeItemStorage(AUTORIZATION_KEY)

export const setAuthorizationKey = async (token: string) => setItemStorage(AUTORIZATION_KEY, token)

export const getAuthorizationToken = async () => getItemStorage(AUTORIZATION_KEY)