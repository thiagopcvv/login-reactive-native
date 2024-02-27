import { View } from "react-native"
import { useCartReducer } from "../../../store/reducers/cartReducer/useCartReducer"
import { useEffect } from "react"
import { useRequest } from "../../shared/hooks/useRequest"
import { CART_URL } from "../../shared/constants/urls"
import { MetheodEnum } from "../../../enums/metheods"
import { CartType } from "../../shared/types/CartType"

const Cart = () => {
    const {request} = useRequest()
    const {cart, setCart} = useCartReducer()

    useEffect(() => {
        request<CartType>({
            url: CART_URL,
            metheod: MetheodEnum.GET,
            saveGlobal: setCart
        })
    },[])

    return(
        <View></View>
    )
}

export default Cart