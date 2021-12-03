import styled from 'styled-components'

const MovieStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .4em .3em;

    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px 16px 16px 0px;

    img {
        width: 12em;
        height: 19em;

        border-radius: 16px 16px 0px 0px; 
    }

    .titulo-filme {
        color: #FFCA76;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-size: 1.5em;
        font-family: 'Share Tech';

        margin: .5em 0em;
    }

    .opcao-linguagem,
    .classificacao {
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Share Tech';

        margin-bottom: .4em;
    }
`

export { MovieStyled };