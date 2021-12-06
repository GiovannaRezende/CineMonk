import { Background } from '../../components/background/styled';
import LogoRow from '../../components/logoRow';
import { Container } from './styled'

import BoxMovie from '../../components/boxMovie'

export default function Pagamento() {
    return (
        <Background>
            <Container> 
                    <div className='cabecalho'> 
                        <LogoRow />
                        <div className="titulo"> Selecione a melhor opção de pagamento </div>
                    </div>
                    <div className='conteudo'>
                        <BoxMovie />
                    </div> 
            </Container>
        </Background>
    )
}