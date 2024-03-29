import styled from "styled-components/native";

interface TextContProps {
  color?: string
  fontSize?: string
  fontFamily: 'Poppins-Bold' | 'Poppins-Medium' | 'Poppins-Light'
  customMargin?: string
}

export const TextCont = styled.Text<TextContProps>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  ${(props) => (props.customMargin ? `margin: ${props.customMargin};` : '')};  
  ${(props) => (props.color ? `color: ${props.color}` : '')};
`