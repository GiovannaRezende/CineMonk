import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;

    background-color: #C60A0A;
    color: #fff;

    width: 19em;
    height: 17em;

    border-radius: 1em;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);

    .day-of-week{
        font: 1.8em Space Mono;
        font-weight: bold;
    }

    .day-in-number {
        font: 800 4em Spartan;
        font-weight: bold;
    }

    .month {
        font: 1.8em Space Mono;
        font-weight: bold;
    }
`

export { Container };