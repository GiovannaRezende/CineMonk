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
                    <div className="title"> Selecione a data que você deseja comprar o ingresso. </div>
                    <div className="boxes">
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
                </div>
            </Background>
        </Container>
    )
}