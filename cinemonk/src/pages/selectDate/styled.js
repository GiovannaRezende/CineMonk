import styled from 'styled-components'

const Container = styled.div`
    .contents {
        display: flex;
        flex-direction: column;

        padding: 1.5em 14.5em;
    }

    .boxes {
        display: flex;
        flex-direction: row;
    }

    .title {
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

        font-family: 'Share Tech';
        font-size: 2.3em;
        margin-left: .6em;
        padding: 0em 0em 2em 0em;
    }

    .right {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export { Container };