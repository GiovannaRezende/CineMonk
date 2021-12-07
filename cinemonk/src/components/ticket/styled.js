import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 20vh;
    width: 18vw;

    background-image: url("/assets/images/ticket.png");
    background-repeat: no-repeat;
    background-size: 100%;

    align-items: center;
    justify-content: center;
    margin: 1em 3em;


.box-text{
    margin-left: 3em;
    width: 10em;
    font-family: 'Share Tech';
}


.info{
    color: #960404;
    font-family: 'Share Tech';
    font-size: 15px;
}

.date{
    color: #373737;
    font-family: 'Share Tech';
    font-size: 13px;
}

.movie-name{
    font-family: 'Share Tech';
    font-size: 20px;
    margin: .3em 0em;
}

`

export { Container }