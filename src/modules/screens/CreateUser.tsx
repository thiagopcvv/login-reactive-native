import { ScrollView, View, StyleSheet } from "react-native"
import Input from '../../modules/shared/components/input/input'
import Button from "../shared/components/button/Button"
import { CreateUserCont } from "./CreateUser.style"
import { useCreateUser } from "./hooks/useCreateUser"

const CreateUser = () => {
    const { createUser, loading, handleOnChangle, handleCreateUser, disabled } = useCreateUser()

    return (
        <CreateUserCont>
            <Input value={createUser.name} onChange={(event) => handleOnChangle(event, 'name')} style={styles.input} title='Nome Completo' placeholder="Dgite"></Input>
            <Input value={createUser.phone} onChange={(event) => handleOnChangle(event, 'phone')} style={styles.input} title='Telefone' placeholder="Dgite"></Input>
            <Input value={createUser.email} onChange={(event) => handleOnChangle(event, 'email')} style={styles.input} title='Email' placeholder="Dgite"></Input>
            <Input value={createUser.cpf} onChange={(event) => handleOnChangle(event, 'cpf')} style={styles.input} title='CPF' placeholder="Dgite" type="cpf"></Input>
            <Input value={createUser.password} onChange={(event) => handleOnChangle(event, 'password')} style={styles.input} title='Senha' placeholder="Dgite"></Input>
            <Input value={createUser.confirmPassword} onChange={(event) => handleOnChangle(event, 'confirmPassword')} style={styles.input} title='Confirmar Senha' placeholder="Dgite"></Input>
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