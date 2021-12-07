import { Container } from "./styled";


export default function BoxSelectMovie(){
    return(
        <Container>
            <img src='/assets/images/movie-poster-test.jpg' alt=''/> 
            <div className="box-info">
                <div className="name"> John Wick 4</div>
                <div className="language"> Dublado </div>
                <div className="class">Classificação: +16 </div>
            </div>
        </Container>
    )
}