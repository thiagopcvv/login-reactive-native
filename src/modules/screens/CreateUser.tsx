import { ScrollView, View, StyleSheet, TextInput } from "react-native"
import Input from '../../modules/shared/components/input/input'
import Button from "../shared/components/button/Button"
import { CreateUserCont } from "./CreateUser.style"
import { useCreateUser } from "./hooks/useCreateUser"
import { useRef } from "react"

const CreateUser = () => {
    const { createUser, loading, handleOnChangle, handleCreateUser, disabled } = useCreateUser()

    const nameInput = useRef<TextInput>(null);
    const phoneInput = useRef<TextInput>(null);
    const emailInput = useRef<TextInput>(null);
    const cpfInput = useRef<TextInput>(null);
    const passwordInput = useRef<TextInput>(null);
    const confirmPasswordInput = useRef<TextInput>(null);


    return (
        <CreateUserCont>
            <Input
                value={createUser.name}
                onChange={(event) => handleOnChangle(event, 'name')}
                style={styles.input}
                title='Nome Completo'
                placeholder="Digite"
                onSubmitEditing={() => phoneInput.current?.focus()}
                ref={nameInput}
            />
            <Input
                value={createUser.phone}
                onChange={(event) => handleOnChangle(event, 'phone')}
                style={styles.input}
                title='Telefone'
                placeholder="Digite"
                type="cel-phone"
                onSubmitEditing={() => emailInput.current?.focus()}
                ref={phoneInput}
                keyboardType="phone-pad"
            />
            <Input
                value={createUser.email}
                onChange={(event) => handleOnChangle(event, 'email')}
                style={styles.input}
                title='Email'
                placeholder="Digite"
                onSubmitEditing={() => cpfInput.current?.focus()}
                ref={emailInput}
                keyboardType="email-address"
            />
            <Input
                value={createUser.cpf}
                onChange={(event) => handleOnChangle(event, 'cpf')}
                style={styles.input}
                title='CPF'
                placeholder="Digite"
                type="cpf"
                onSubmitEditing={() => passwordInput.current?.focus()}
                ref={cpfInput}
                keyboardType="numeric"
            />
            <Input
                secureTextEntry
                value={createUser.password}
                onChange={(event) => handleOnChangle(event, 'password')}
                style={styles.input}
                title='Senha'
                placeholder="Digite"
                onSubmitEditing={() => confirmPasswordInput.current?.focus()}
                ref={passwordInput}
            />
            <Input
                secureTextEntry
                value={createUser.confirmPassword}
                onChange={(event) => handleOnChangle(event, 'confirmPassword')}
                style={styles.input}
                title='Confirmar Senha'
                placeholder="Digite"
                ref={confirmPasswordInput}
            />
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