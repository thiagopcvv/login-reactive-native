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

const Splash = () => {
    let returnUser;
    const {reset} = useNavigation<NavigationProp<ParamListBase>>()
    const {request} = useRequest()
    const {setUserA} = useUserReductor()

    useEffect(() => {
        const verifyLogin = async () => {
            console.log('urlUser: ' , USER_URL)
            returnUser = await request({
                url: USER_URL,
                metheod: MetheodEnum.GET,
                saveGlobal: setUserA,
                
            })
            console.log('return: ', returnUser )
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