import { Container, Box, Background } from './styles'
import { Form } from '../authUser'
import backgroundImage from "../../assets/backgroundImage.svg"

export function Home() {
    return (
        <Container>
        <Box>
            <section>
                <h2>Acesse a plataforma</h2>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </section>
            <Form />
        </Box>
        
           <Background>
            <img src={backgroundImage} />
           </Background>

        </Container>
    )
}