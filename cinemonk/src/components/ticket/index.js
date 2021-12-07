import { Container } from "./styled";


export default function Ticket(){
    return(
        <Container>
            <div className="box-text">
                <div className="info"> A1 MEIA #864825684</div>
                <div className="date">04/06/2021 17:02 </div>
                <div className="movie-name">Harry Potter e a Pedra Filosofal</div>
                <div className="info">Dublado  Sala 08  13:00h   </div>
            </div>
        </Container>
    )
}