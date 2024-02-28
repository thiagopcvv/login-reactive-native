import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hoooks/hook"
import { ProductType } from "../../../modules/shared/types/productType"
import { setProductsAction, setSearchProductsAction } from "."
import { PaginationType } from "../../../modules/shared/types/SearchType"

export const useProductReducer = () => {
    const dispatch = useDispatch()
    const {products, searchProducts} = useAppSelector((state) => state.productReducer)

    const setProducts = (currentProduct: ProductType[]) => {
        dispatch(setProductsAction(currentProduct))
    }

    const setSearchProducts = (currentProduct: PaginationType<ProductType[]>) => {
        dispatch(setSearchProductsAction(currentProduct))
    }

    const insertSearchProducts = (currentProducts: PaginationType<ProductType[]>) => {
        dispatch(
          setSearchProductsAction({
            ...currentProducts,
            data: [...(searchProducts?.data || []), ...currentProducts.data],
          }),
        );
      };

    return {
        products,
        setProducts,
        setSearchProducts,
        searchProducts,
        insertSearchProducts
    }
}