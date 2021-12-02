import { Container } from './styled';

export default function LogoColumn(){
    return(
        <Container>
            <div className="image"><img src="/assets/images/ticket.svg" alt=""/></div>
            <div className="text">CineMonk</div>
        </Container>
    )
}