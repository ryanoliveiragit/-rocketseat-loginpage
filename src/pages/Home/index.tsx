import { Container, Box } from './styles'
import { Form } from '../authUser'

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
        
        <Box>
            
        </Box>
        </Container>
    )
}