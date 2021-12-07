import { Background } from '../../components/background/styled';
import { Container } from './styled';
import LogoRow from '../../components/logoRow';
import BoxSelectMovie from '../../components/boxSelectMovie';



export default function SelectMovie(){
    return(
        <Container>
            <Background>
                <header> 
                    <LogoRow />
                    <h1 className="title"> Selecione o filme que deseja assistir </h1>
                </header>

                <div className="box-content">
                    <BoxSelectMovie />
                    <BoxSelectMovie />
                    <BoxSelectMovie />
                    <BoxSelectMovie />
                    <BoxSelectMovie />
                    <BoxSelectMovie />
                </div>
            </Background>
        </Container>
    )
}