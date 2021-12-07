import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    padding: .4em .3em;
    width: 20em;
    margin-bottom: 2em;

    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px 16px 0px 0px;

    img{
        width: 6em;
        height: 9em;

        border-radius: 16px 16px 0px 0px; 
    }
    
    .box-info{
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        width: 100%;
    }

    .name {
        color: #FFCA76;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-size: 1.5em;
        font-family: 'Share Tech';

        margin: .5em 0em;
    }

    .language,
    .class {
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Share Tech';

        margin-bottom: .4em;
    }




`

export { Container }