import { current } from "@reduxjs/toolkit"
import { useAppSelector } from "../../hoooks/hook"
import { useDispatch } from "react-redux"
import { setCartsAction } from "."
import { CartType } from '../../../modules/shared/types/CartType'

export const useCartReducer = () => {
    const dispatch = useDispatch()
    const {cart} = useAppSelector((state) => state.cartReducer)

    const setCart = (currentCart: CartType) => {
        dispatch(setCartsAction(currentCart))
    }

    return{
        cart,
        setCart
    }
}