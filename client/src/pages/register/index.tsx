import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Container, Label, ForgotMyPassword, Box, RegisterContainer } from './styles'
import { z } from 'zod'
import Axios from 'axios'

const schema = z.object({
    email: z.string({
        errorMap: () => {
            return { message: 'Digite um e-mail válido' }
        }
    }).email(),
    password: z.string(),
    confirmPassword: z.string(),
}).refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
});

type FormProps = z.infer<typeof schema>;

interface formPropsButton {
    onGoToLoginClick: () => void;
}

export function Register({ onGoToLoginClick }: formPropsButton) {

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
        Axios.post("http://localhost:3001/register", {
            email: data.email,
            password: data.password,
          }).then((response) => {
            alert(response.data.msg);
            console.log(response);
          });
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
                    <Label>Senha</Label>
                    <TextField
                        size="small"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                    />
                    <Label>Confirme sua senha</Label>
                    <TextField
                        size="small"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword?.message}
                        helperText={errors.confirmPassword?.message}
                    />

                </Box>
            </Container>
            <RegisterContainer>
                <span>Já tem uma conta? <a href="#" onClick={onGoToLoginClick}>Entrar</a></span>
            </RegisterContainer>
            <Button type="submit">Registrar-se</Button>
        </form>
    );
}
