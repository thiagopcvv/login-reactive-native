import { View } from "react-native"
import { ProductParam } from "../product/screens/Product";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../store/hoooks/hook";
import { useEffect } from "react";
import { useRequest } from "../shared/hooks/useRequest";
import { MetheodEnum } from "../../enums/metheods";
import { useProductReducer } from "../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../shared/types/SearchType";
import { ProductType } from "../shared/types/productType";
import Text from "../shared/components/text/Text";

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, SearchParam>>

export interface SearchParam{
    search?: string
}


const SearchProducts = () => {
    const {request} = useRequest()
    const {searchProducts, setSearchProducts} = useProductReducer()
    const {params} = useRoute<RouteProp<Record<string, SearchParam>>>()
    
    useEffect(() => {
        request<PaginationType<ProductType[]>>({
            url: 'https://www.bocaweb.com.br/apibocaweb?nome=futebol',
            metheod: MetheodEnum.GET,
            saveGlobal: setSearchProducts
        })
    }, [params.search])


    console.log('adssa', params.search)
    return(
        <>
        {searchProducts && <Text>TEM</Text>}
        <Text>HAHA</Text>
        </>
    )
}

export default SearchProducts;