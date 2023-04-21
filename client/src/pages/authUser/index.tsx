import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { z } from "zod";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

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
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

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
    onGoToRegisterClick: () => void;
}

export function Form({ onGoToRegisterClick }: formPropsButton) {

    const navigate = useNavigate();

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
        Axios.post('http://localhost:3001/login', {
          email: data.email,
          password: data.password,
        })
          .then((response) => {
            if (
              response.status === 200 &&
              response.data.msg === 'Usuário logado com sucesso!'
            ) {
                localStorage.setItem('auth', 'true');
                navigate('/home')
            } else {
              alert('Usuário não encontrado');
            }
          })
          .catch((error) => {
            alert('Erro ao efetuar login');
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
