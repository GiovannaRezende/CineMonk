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
        justify-content: space-between;

        padding: 0em 6.5em;
    }
    
    .titulo {
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

        font-family: 'Share Tech';
        font-size: 2.3em;
        margin-left: 2em;
    }
`

export { Container };