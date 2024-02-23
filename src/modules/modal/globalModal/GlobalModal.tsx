import { useState } from "react"
import Modall from "../Modal"
import ModalErro from "../ModalError"
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer"

export interface GlobalModalType{
    visible: boolean
    title: string
    text: string
}

const GlobalModal = () => {
    const { modal, closeModal } = useGlobalReducer()


    return(
    <ModalErro title={modal.title} text={modal.text} visible={modal.visible} onCloseModal={closeModal}></ModalErro>
    )
}

export default GlobalModal