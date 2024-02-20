import { TextInputProps } from "react-native/types"
import { InputCont } from "./input.style";
import Text from "../text/Text";


type InputProps =  TextInputProps;

const input = ({...props}: InputProps) => {
    return <InputCont {...props}> <Text>Nome de usuário</Text></InputCont>;
}

export default input