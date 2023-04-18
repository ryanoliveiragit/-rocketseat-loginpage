import { Container, Box, Background } from './styles'
import { Form } from '../authUser'
import backgroundImage from "../../assets/backgroundImage.svg"
import { Register } from '../register';
import { useState } from 'react';


export function Home() {

    const [state, setState] = useState<any>({ showLogin: true });

    const handleGoToRegisterClick = () => {
        setState({ showLogin: false });
    };

    const handleGoToLoginClick = () => {
        setState({ showLogin: true });
    };

    return (
        <Container>
            <Box>
                <section>
                    <h2>Acesse a plataforma</h2>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                </section>
                <div>
                    {state.showLogin ? (
                        <Form onGoToRegisterClick={handleGoToRegisterClick} />
                    ) : (
                        <Register onGoToLoginClick={handleGoToLoginClick} />
                    )}
                </div>
            </Box>

            <Background>
                <img src={backgroundImage} />
            </Background>

        </Container>
    )
}