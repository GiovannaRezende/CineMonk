import { Background } from '../../components/background/styled';
import LogoRow from '../../components/logoRow';
import { Container } from './styled';

export default function SelectSeat(){
    return(
        <Container>
            <Background>
                <LogoRow/>
                <div className="contents">
 
                </div>
            </Background>
        </Container>
    )
}