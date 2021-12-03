import { Background } from '../../components/background/styled';
import BoxHourLanguage from '../../components/boxHourLanguage';
import LogoRow from '../../components/logoRow';
import { Container } from './styled';

export default function SelectHourLanguage(){
    return(
        <Container>
            <Background>
                <LogoRow/>
                <div className="contents">
                    <BoxHourLanguage/>
                    <BoxHourLanguage/>
                    <BoxHourLanguage/>
                    <BoxHourLanguage/>
                    <BoxHourLanguage/>
                    <BoxHourLanguage/>
                </div>
            </Background>
        </Container>
    )
}