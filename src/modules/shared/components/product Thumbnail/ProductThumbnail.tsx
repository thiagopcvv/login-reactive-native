import { ActivityIndicator, StyleSheet, View } from "react-native"
import { ImagemLog, InsertCart, ProductThumbnailCont } from "./ProductThumbnail.style"
import { ProductType } from "../../types/productType"
import Text from "../text/Text"
import { textTypes } from "../text/textType"
import { convertNumber } from "../../functions/money"
import { theme } from "../../themes/theme"
import Button from "../button/Button"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { ProductNavigationProp } from "../../../product/screens/Product"
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum"
import { Icon } from "../../icon/icon"
import { CART_URL } from "../../constants/urls"
import { MetheodEnum } from "../../../../enums/metheods"
import { useRequest } from "../../hooks/useRequest"

interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
    const navigation = useNavigation<ProductNavigationProp>();
    const { request, loading } = useRequest()

    const handleProductPress = () => {
        navigation.navigate(MenuUrl.PRODUCT, { product });
    };

    const handleInsertProduct = () => {
        request({
            url: CART_URL,
            metheod: MetheodEnum.POST,
            body: {
                productId: product._id,
                amount: 1
            },
            message: 'Inserido com sucesso!',
        })
    }

    return (
        <ProductThumbnailCont onPress={handleProductPress} margin={margin}>
            <ImagemLog resizeMode='center' source={require('../../../../assets/image/logoEducarNovo.png')} />
            <Text type={textTypes.PARAGRAPH_BOLD}>{product.nome}</Text>
            <Text type={textTypes.PARAGRAPH_BOLD} color={theme.colors.blue80.blue80}>
                {convertNumber(product._id)}
            </Text>
            <InsertCart onPress={handleInsertProduct}>
                {loading ? (
                    <ActivityIndicator color={theme.colors.whiteTheme.white}></ActivityIndicator>
                ) : (
                    <Icon name="database" color={theme.colors.whiteTheme.white} size={16} />)
                }
            </InsertCart>
        </ProductThumbnailCont>
    );
};

export default ProductThumbnail;