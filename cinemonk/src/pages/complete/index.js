import { Background } from '../../components/background/styled';
import { Container } from './styled';
import LogoColumn from '../../components/logoColumn';
import Ticket from '../../components/ticket';



export default function Complete(){
    return(
        <Container>
            <Background>
                <header> 
                    <LogoColumn />
                    <h1 className="title"> Parabéns! Sua compra foi realizada com sucesso. 
                    Agora é só aproveitar o filme :) </h1>
                </header>

                <div className="box-content">
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </div>
            </Background>
        </Container>
    )
}