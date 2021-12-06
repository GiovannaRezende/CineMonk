import styled from 'styled-components'

const Container = styled.div`

    .cabecalho {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 2em;
    }

    .titulo {
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

        font-family: 'Share Tech';
        font-size: 2.3em;
        margin-left: 2em;
    }
    
    .contents {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        padding: 0em 15em;
    }

    .horarios {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        margin-left: 3em;
        width: 30em;
    }

  
`

export { Container };