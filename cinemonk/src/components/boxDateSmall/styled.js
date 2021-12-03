import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;

    background-color: #AA0A0A;
    color: #fff;

    width: 8.7em;
    height: 8.1em;

    padding: .5em;
    border-radius: .8em;

    .day-of-week{
        font: 600 1.1em Space Mono;
        font-weight: bold;
    }

    .day-in-number {
        font: 800 2.5em Spartan;
        font-weight: bold;
    }

    .month {
        font: 600 1.1em Space Mono;
        font-weight: bold;
    }
`

export { Container };