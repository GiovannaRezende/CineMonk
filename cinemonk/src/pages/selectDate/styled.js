import styled from 'styled-components'

const Container = styled.div`
    .contents {
        display: flex;
        flex-direction: row;

        padding: 4em 15em;
    }

    .right {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export { Container };