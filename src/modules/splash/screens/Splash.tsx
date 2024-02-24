import { useEffect } from "react"
import { ImagemLog } from "../../login/styles/login.style"
import { DisplayCenterFul } from "../styles/splash.style"
import { useRequest } from "../../shared/hooks/useRequest"
import { USER_URL } from "../../shared/constants/urls"
import { MetheodEnum } from "../../../enums/metheods"
import { userReducer } from "../../../store/reducers/userReducer"
import { useUserReductor } from "../../../store/reducers/userReducer/useUserReduce"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { MenuUrl } from "../../shared/enums/MenuUrl.enum"
import { getAuthorizationToken } from "../../shared/functions/connection/auth"
import { userType } from "../../shared/types/userType"

const Splash = () => {
    const {reset} = useNavigation<NavigationProp<ParamListBase>>()
    const {request} = useRequest()
    const {setUserA} = useUserReductor()

    useEffect(() => {
        const finduser = async (): Promise<undefined | userType> => {
            let returnUser;
            const token = await getAuthorizationToken()

            if(token){
            returnUser = await request<userType>({
                url: USER_URL,
                metheod: MetheodEnum.GET,
                saveGlobal: setUserA,
                
            })
        }
        return returnUser
        }

        const verifyLogin = async () => {
            const [returnUser] = await Promise.all([
                finduser(),
                new Promise((sleep: any) => setTimeout(sleep, 1000)) 
            ]) 
            
             if(returnUser){
                reset({
                    index: 0,
                    routes: [{name: MenuUrl.HOME}]
                })
            } else {
                reset({
                    index: 0,
                    routes: [{name: MenuUrl.LOGIN}]
                })
            }
        }
        verifyLogin()
    }, [])

    return(
        <DisplayCenterFul>
            <ImagemLog resizeMode='center' source={require('../../../assets/image/logoEducarNovo.png')}></ImagemLog>
        </DisplayCenterFul>
    )
}

export default Splash