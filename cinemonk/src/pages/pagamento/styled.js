import styled from 'styled-components'

const Container = styled.div`
    padding: 1em 2em;

    .cabecalho {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 2em;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        padding: 0em 6.5em;
    }
    
    .titulo {
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

        font-family: 'Share Tech';
        font-size: 2.3em;
        margin-left: 2em;
    }

    .box-pagamento {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        background: linear-gradient(180deg, #AA0A0A 0%, rgba(83, 0, 0, 0.92) 126.82%);
        border-radius: 10px;

        padding: 1em 2em;
        margin-bottom: 1em;
    }

    .barra {
        width: 0px;
        height: 15em;

        border: 1px solid #5A1010;
    }

    h1 {
        color: #FFB540;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin-bottom: 2em;
        font-family: 'Share Tech';
    }

    .box-lugares,
    .box-pedido {
        padding: 0em 2em;
    }

    .box-lugares{
        margin-right: 1em;
    }
    
    .box-pedido {
        margin-left: 1em;
    }

    .assento {
        display: flex;
        flex-direction: row;

        color: white;
        font-family: 'Share Tech';
        font-size: 1.5em;
    }

    select {
        margin-left: 1em;
        border: none;
        outline: none;

        font-family: 'Share Tech';

        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 26px;
    }

    option {
        font-family: 'Share Tech';
    }

    .informacoes-pedido {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: white;
    }

    .ingresso-meia,
    .ingresso-inteiro,
    .valor-total {
        font-family: 'Share Tech';
    }

    .valor-total {
        font-size: 2em;
    }

    .botao-concluir {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    

    button {
        border-radius: 55px;
        border: none;
        font-family: 'Share Tech';
        font-size: 1.1em;

        height: 6em;
        width: 6em;

        background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
        color: #626262;
        text-shadow: 0px 4px 10px rgba(108, 108, 108, 0.25);
    }
    
`

export { Container };