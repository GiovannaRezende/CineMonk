import { Background } from '../../components/background/styled';
import LogoColumn from '../../components/logoColumn';
import { Container } from './styled'
import { ButtonStyled } from './button/styled'

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Background>
            <Container> 
                <LogoColumn />
                <div className="titulo"> O que você quer fazer? </div>
                <Link to='/date'> <ButtonStyled> Comprar Ingresso </ButtonStyled> </Link>
            </Container>
        </Background>
    )
}