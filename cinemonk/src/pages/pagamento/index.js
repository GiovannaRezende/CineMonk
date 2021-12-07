import { Background } from '../../components/background/styled';
import LogoRow from '../../components/logoRow';
import { Container } from './styled'

import BoxMovie from '../../components/boxMovie'

export default function Pagamento() {
    return (
        <Background>
            <Container> 
                    <div className="cabecalho"> 
                        <LogoRow />
                        <div className="titulo"> Selecione a melhor opção de pagamento </div>
                    </div>
                    <div className="conteudo">
                        <BoxMovie />
                        <div className="box-esq">
                            <div className="box-pagamento"> 
                                <div className="box-lugares"> 
                                    <h1> Lugares </h1>
                                    <div className="assento"> A1 
                                        <select> 
                                            <option> Meia </option>
                                            <option> Inteira </option> 
                                        </select> 
                                    </div>
                                </div>
                                <div className="barra">  </div>
                                <div className="box-pedido">
                                    <h1> Pedido </h1>
                                    <div className="informacoes-pedido"> 
                                        <div className="ingresso-meia"> Ingressos meia: </div>
                                        <div className="ingresso-inteiro"> Ingressos inteiros: </div>
                                        <div className="valor-total"> Total: R$  </div>
                                    </div>
                                </div>
                            </div>
                            <div className="botao-concluir"> <button> Concluir </button> </div>
                        </div>
                    </div> 
            </Container>
        </Background>
    )
}