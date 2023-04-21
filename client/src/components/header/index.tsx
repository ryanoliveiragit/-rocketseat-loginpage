import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './styles'
import { FiLogOut } from 'react-icons/fi'

export function Header() {
    const navigate = useNavigate()

    function Logout() {
        localStorage.setItem('auth', 'false');
        navigate('/')
    }

    return (
        <>
            <HeaderContainer>
                <h1>ryanvs</h1>
                <ul>
                    <li>Usuários</li>
                    <li>Pedidos</li>
                    <li>Agenda</li>
                    <li><FiLogOut onClick={Logout}>Deslogar</FiLogOut></li>
                </ul>
            </HeaderContainer>
        </>
    )
}