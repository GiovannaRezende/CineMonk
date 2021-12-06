import { Background } from '../../components/background/styled';
import BoxHourLanguage from '../../components/boxHourLanguage';
import LogoRow from '../../components/logoRow';
import { Container } from './styled';
import BoxMovie from '../../components/boxMovie/index'

export default function SelectHourLanguage(){
    return(
        <Container>
            <Background>
                <div className='cabecalho'> 
                        <LogoRow />
                        <div className="titulo"> Selecione o horário e o idioma </div>
                </div>
                <div className="contents">
                    <BoxMovie />
                    <div className='horarios'> 
                        <BoxHourLanguage/>
                        <BoxHourLanguage/>
                        <BoxHourLanguage/>
                        <BoxHourLanguage/>
                        <BoxHourLanguage/>
                        <BoxHourLanguage/>
                    </div>
                </div>
            </Background>
        </Container>
    )
}