import { View } from "react-native"
import { ImagemLog, ProductThumbnailCont } from "./ProductThumbnail.style"
import { ProductType } from "../../types/productType"
import Text from "../text/Text"

interface ProductThubnailProps {
    product: ProductType
    margin?: string
}

const ProductThumbnail = ({product, margin}: ProductThubnailProps) => {
    return(
        <ProductThumbnailCont margin={margin}>
            <ImagemLog resizeMode='center' source={require('../../../../assets/image/logoEducarNovo.png')}></ImagemLog>
            <Text>{product.nome}</Text>
            <Text>{product.usuario}</Text>
        </ProductThumbnailCont>
    )
}


export default ProductThumbnail