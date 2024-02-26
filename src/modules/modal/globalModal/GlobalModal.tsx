import { useState } from "react"
import Modal from "../Modal"
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer"

export interface GlobalModalType{
    visible: boolean
    title: string
    text: string
    trueOrMot: boolean
}

const GlobalModal = () => {
    const { modal, closeModal } = useGlobalReducer()

    return(
    <Modal title={modal.title} text={modal.text} visible={modal.visible} onCloseModal={closeModal} trueOrMot={modal.trueOrMot}></Modal>
    )
}

export default GlobalModal