import { Background } from '../../components/background/styled';
import LogoRow from '../../components/logoRow';
import { Box } from '../../components/seatPage/box/styled';
import Letter from '../../components/seatPage/letter';
import { Container } from './styled';
import { Link } from 'react-router-dom';

export default function SelectSeat(){
    return(
        <Container>
            <Background>
                <LogoRow/>
                <div className="contents">
                    <Box>
                        <Letter/> 
                        <Letter/>
                        <Letter/> 
                        <Letter/>
                        <Letter/> 
                        <Letter/>
                        <Letter/> 
                        <Letter/>
                    </Box>
                    <div className="button"><Link to="/pagamento"><button>Próximo</button></Link></div>
                </div>
            </Background>
        </Container>
    )
}