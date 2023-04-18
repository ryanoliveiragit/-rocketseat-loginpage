import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { z } from "zod";

import {
    Container,
    Box,
    PasswordChange,
    Label,
    RegisterContainer,
    ForgotMyPassword
} from './styles'

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/button";

const schema = z.object({
    email: z.string({
        errorMap: () => {
            return { message: 'Digite um e-mail válido' }
        }
    }).email(),
    password: z.string(),
});

type FormProps = z.infer<typeof schema>;

interface formPropsButton {
    onGoToRegisterClick: any;
}

export function Form({ onGoToRegisterClick }: formPropsButton) {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormProps>({
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        mode: "all",
    });

    console.log(errors);

    const handleForm = (data: FormProps) => {
        console.log({ data });
    };

    return (
        <form onSubmit={handleSubmit(handleForm)}>
            <Container>
                <Box>
                    <Label>E-mail</Label>
                    <TextField
                        type="text"
                        size="small"
                        placeholder="Digite seu e-mail"
                        {...register("email")}
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}
                    />
                </Box>

                <Box>

                    <PasswordChange>
                        <Label>Senha</Label>
                        <ForgotMyPassword>Esqueceu a senha?</ForgotMyPassword>
                    </PasswordChange>

                    <TextField
                        size="small"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                    />

                </Box>
            </Container>
            <Button type="submit">Entrar</Button>
            <RegisterContainer>
                <span>Ainda não tem uma conta? <a href="#" onClick={onGoToRegisterClick}>Inscreva-se</a></span>
            </RegisterContainer>
        </form>
    );
}
