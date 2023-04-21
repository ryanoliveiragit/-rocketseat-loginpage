import { useNavigate } from "react-router-dom";
import {Container} from './styles'
import { Header } from "../../components/header";
import {Footer} from '../../components/footer'

export function PrimaryPage(){

    return(
       <div>
         <Header />
         <Container>
            <h1>Bem vindo(a)</h1>
         </Container>
       </div>
    )
}