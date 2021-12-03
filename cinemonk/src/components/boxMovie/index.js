import { MovieStyled } from './styled'


export default function BoxMovie() {
    return (
        <MovieStyled> 
            <img src='/assets/images/movie-poster-test.jpg' alt=''/> 
            <div className='titulo-filme'> John Wick 4 </div>
            <div className='opcao-linguagem'> Dublado </div> 
            <div className='classificacao'> Classificação: +16 </div>
        </MovieStyled>
    )
}