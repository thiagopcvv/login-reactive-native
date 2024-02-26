import { ScrollView, View, StyleSheet, TextInput } from "react-native"
import Input from '../../modules/shared/components/input/input'
import Button from "../shared/components/button/Button"
import { CreateUserCont } from "./CreateUser.style"
import { useCreateUser } from "./hooks/useCreateUser"
import { useRef } from "react"

const CreateUser = () => {
    const { createUser, loading, handleOnChangle, handleCreateUser, disabled } = useCreateUser()

    const phoneInput = useRef<TextInput>(null)

    return (
        <CreateUserCont>
            <Input value={createUser.name} onChange={(event) => handleOnChangle(event, 'name')} style={styles.input} title='Nome Completo' placeholder="Dgite" onSubmitEditing={() => phoneInput?.current?.focus}></Input>
            <Input value={createUser.phone} onChange={(event) => handleOnChangle(event, 'phone')} style={styles.input} title='Telefone' placeholder="Dgite" type="cel-phone" ref={phoneInput}></Input>
            <Input value={createUser.email} onChange={(event) => handleOnChangle(event, 'email')} style={styles.input} title='Email' placeholder="Dgite"></Input>
            <Input value={createUser.cpf} onChange={(event) => handleOnChangle(event, 'cpf')} style={styles.input} title='CPF' placeholder="Dgite" type="cpf"></Input>
            <Input secureTextEntry value={createUser.password} onChange={(event) => handleOnChangle(event, 'password')} style={styles.input} title='Senha' placeholder="Dgite"></Input>
            <Input secureTextEntry value={createUser.confirmPassword} onChange={(event) => handleOnChangle(event, 'confirmPassword')} style={styles.input} title='Confirmar Senha' placeholder="Dgite"></Input>
            <Button
                disabled={disabled}
                onPress={handleCreateUser}
                loading={loading}
                margin="0px 0px 32px 0px"
                title="Criar usuário"
            />
        </CreateUserCont>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 16
    },
})

export default CreateUser