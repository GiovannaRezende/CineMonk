import { Background } from '../../components/background/styled';
import LogoRow from '../../components/logoRow';
import BoxDateLarge from '../../components/boxDateLarge';
import BoxDateSmall from '../../components/boxDateSmall';
import { Container } from './styled';

export default function SelectDate(){
    return(
        <Container>
            <Background>
                <LogoRow/>
                <div className="contents">
                    <div className="left">
                        <BoxDateLarge/>
                    </div>   
                    <div className="right">
                        <BoxDateSmall/>
                        <BoxDateSmall/>
                        <BoxDateSmall/>
                        <BoxDateSmall/>
                        <BoxDateSmall/>
                        <BoxDateSmall/>
                    </div>
                </div>
            </Background>
        </Container>
    )
}