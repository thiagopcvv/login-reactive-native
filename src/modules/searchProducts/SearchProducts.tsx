import React, { useEffect, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent, FlatList, TextInputChangeEventData, View, StyleSheet } from "react-native";
import { ProductParam } from "../product/screens/Product";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../store/hoooks/hook";
import { useRequest } from "../shared/hooks/useRequest";
import { MetheodEnum } from "../../enums/metheods";
import { useProductReducer } from "../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../shared/types/SearchType";
import { ProductType } from "../shared/types/productType";
import Text from "../shared/components/text/Text";
import Input from "../shared/components/input/input";
import ProductThumbnail from "../shared/components/product Thumbnail/ProductThumbnail";
import { FlatListCont, SearchProductCont } from "./style/Search.style";
import { Colors } from "react-native/Libraries/NewAppScreen";

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, SearchParam>>

export interface SearchParam {
    search?: string
}

const SearchProducts = () => {
    const { request } = useRequest()
    const { searchProducts, setSearchProducts, insertSearchProducts } = useProductReducer()
    const { params } = useRoute<RouteProp<Record<string, SearchParam>>>()
    const [value, setValue] = useState(params?.search || '')

    useEffect(() => {
        setValue(params?.search || '')
    }, [params])

    useEffect(() => {
        if (value) {
            request<PaginationType<ProductType[]>>({
                url: `https://www.bocaweb.com.br/apibocaweb?nome=${value}`,
                metheod: MetheodEnum.GET,
                saveGlobal: setSearchProducts
            })
        }
    }, [value])

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text);
    };

    const renderItem = ({ item }: { item: ProductType }) => (
        <FlatListCont>
            <View style={styles.vi}>
                <ProductThumbnail product={item} />
            </View>
        </FlatListCont>
    );

    return (
        <SearchProductCont>
            <Input onChange={handleOnChangeInput} value={value} iconRight="search"></Input>
            {searchProducts && (
                <FlatList
                    data={searchProducts}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.1}
                />
            )}
        </SearchProductCont>
    )
}

const styles = StyleSheet.create({
    vi: {
        backgroundColor: 'white',
        width: 120
    },
    item: {
        backgroundColor: 'blue'
    }
})

export default SearchProducts;
