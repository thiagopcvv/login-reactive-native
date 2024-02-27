import { View } from "react-native"
import Text from "../../shared/components/text/Text"
import { useRoute, RouteProp } from "@react-navigation/native"
import { ProductType } from "../../shared/types/productType"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParam>>

export interface ProductParam {
    product: ProductType
}

const Product = () => {
    const {params} = useRoute<RouteProp<Record<string, ProductParam>>>()
    const {product} = params
    return(
        <View>
            <Text>{product.descricao}</Text>
        </View>
    )

}

export default Product