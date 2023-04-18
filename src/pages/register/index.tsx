import TextField from "@mui/material/TextField";
import { Container, Label, ForgotMyPassword } from './styles'

interface RegisterProps {
    onGoToLoginClick: () => void;
}

export function Register({ onGoToLoginClick }: RegisterProps) {
    return (
        <Container>
            <Label>E-mail</Label>
            <TextField
                type="text"
                size="small"
                placeholder="Digite seu e-mail"
            />

            <Label>Telefone</Label>
            <TextField
                type="text"
                size="small"
                placeholder="Digite seu número"
            />

            <Label>Senha</Label>
            <TextField
                type="password"
                size="small"
                placeholder="Digite sua senha"
            />

            <Label>Confirme sua senha</Label>
            <TextField
                type="password"
                size="small"
                placeholder="Confirme sua senha"
            />
            <ForgotMyPassword>Já possui uma conta? <a href="#" onClick={onGoToLoginClick}>Logar</a></ForgotMyPassword>
        </Container>
    )
}