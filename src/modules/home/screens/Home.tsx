import { SafeAreaView } from "react-native-safe-area-context"
import Text from "../../shared/components/text/Text"
import { InputCont } from "../../shared/components/input/input.style"
import Button from "../../shared/components/button/Button"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { logout } from "../../shared/functions/connection/auth"
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer"
import { useEffect } from "react"
import { useRequest } from "../../shared/hooks/useRequest"
import { PRODUCT_URL, USER_URL } from "../../shared/constants/urls"
import { MetheodEnum } from "../../../enums/metheods"
import { ProductType } from "../../shared/types/productType"
import { MenuUrl } from "../../shared/enums/MenuUrl.enum"
import { FlatList, TouchableOpacity } from "react-native"
import { ProductNavigationProp } from "../../product/screens/Product"
import ProductThumbnail from "../../shared/components/product Thumbnail/ProductThumbnail"

const Home = () => {
    const { products, setProducts } = useProductReducer()
    const { request } = useRequest()

    useEffect(() => {
        request<ProductType[]>({
            url: PRODUCT_URL,
            metheod: MetheodEnum.GET,
            saveGlobal: setProducts,
        });
    }, []);


    return (
        <SafeAreaView>
            <Text>teste</Text>
            <FlatList horizontal data={products} renderItem={({item}) => <ProductThumbnail margin="0px 4px" product={item}/>}/>
        </SafeAreaView>
    )
}

export default Home