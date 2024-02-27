import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hoooks/hook"
import { ProductType } from "../../../modules/shared/types/productType"
import { setProductsAction } from "."

export const useProductReducer = () => {
    const dispatch = useDispatch()
    const {products} = useAppSelector((state) => state.productReducer)

    const setProducts = (currentProduct: ProductType[]) => {
        dispatch(setProductsAction(currentProduct))
    }

    return {
        products,
        setProducts
    }
}