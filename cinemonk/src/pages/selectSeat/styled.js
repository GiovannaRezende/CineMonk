import styled from 'styled-components'

const Container = styled.div`
    .contents {
        display: flex;
        padding: 3em 12em;
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