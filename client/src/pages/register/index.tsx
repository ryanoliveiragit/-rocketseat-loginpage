import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Container, Label, Box, RegisterContainer, Fixed } from './styles'
import { z } from 'zod'
import Axios from 'axios'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";

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
        reset,
        formState: { errors },
    } = useForm<FormProps>({
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        mode: "all",
    });

    console.log(errors);
    const [msgAlert, setMsgAlert] = useState('')

    const handleForm = (data: FormProps) => {
        Axios.post("http://localhost:3001/register", {
          email: data.email,
          password: data.password,
        }).then((response) => {
          if (response.status === 200 && response.data.msg === 'Usuário cadastrado com sucesso') {
            const msgErr = response.data.msg;
            reset();
            console.log('INV')
            setMsgAlert(msgErr);
            setTimeout(() => {
              setMsgAlert("");
              onGoToLoginClick()
            }, 3000); // oculta o Alert após 3 segundos
          } else {
            const msg = response.data.msg;
            console.log('INV2')
            setMsgAlert(msg);
            console.log(response); // limpa o formulário apenas quando o cadastro for bem-sucedido
            setTimeout(() => {
              setMsgAlert("");
            }, 3000); // oculta o Alert após 3 segundos
          }
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
            <Stack sx={{ width: '100%' }} spacing={2}>
                {msgAlert && (
                    <Fixed>
                        <Alert color="info">
                            <span>{msgAlert}</span>
                        </Alert>
                    </Fixed>
                )}
            </Stack>
            <RegisterContainer>
                <span>Já tem uma conta? <a href="#" onClick={onGoToLoginClick}>Entrar</a></span>
            </RegisterContainer>
            <Button type="submit">Registrar-se</Button>
        </form>
    );
}
