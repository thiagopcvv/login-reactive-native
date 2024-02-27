import { SafeAreaView } from "react-native-safe-area-context"
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer"
import { useEffect, useState } from "react"
import { useRequest } from "../../shared/hooks/useRequest"
import { PRODUCT_URL } from "../../shared/constants/urls"
import { MetheodEnum } from "../../../enums/metheods"
import { ProductType } from "../../shared/types/productType"
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import ProductThumbnail from "../../shared/components/product Thumbnail/ProductThumbnail"
import { HomeCont } from "../style/home.style"
import Input from "../../shared/components/input/input"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { MenuUrl } from "../../shared/enums/MenuUrl.enum"
import { SearchNavigationProp } from "../../searchProducts/SearchProducts"

const Home = () => {
    const [search, setSearch] = useState('')
    const { navigate } = useNavigation<SearchNavigationProp>()
    const { products, setProducts } = useProductReducer()
    const { request } = useRequest()

    useEffect(() => {
        request<ProductType[]>({
            url: PRODUCT_URL,
            metheod: MetheodEnum.GET,
            saveGlobal: setProducts,
        });
    }, []);

    const handleGoToProduct = () => {
        navigate(MenuUrl.SEARCH, {search})
    }

    const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setSearch(event.nativeEvent.text)
    }

    return (
        <SafeAreaView>
            <HomeCont>
                <Input value={search} onChange={handleOnChangeSearch} onPressIconRight={handleGoToProduct} iconRight="search"></Input>
            </HomeCont>
            <FlatList horizontal data={products} renderItem={({ item }) => <ProductThumbnail margin="0px 4px" product={item} />} />
        </SafeAreaView>
    )
}

export default Home