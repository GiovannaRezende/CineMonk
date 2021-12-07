import styled from "styled-components";


const Container = styled.div`
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1em;
    }

    header h1{
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
        width: 45%;
        margin: 1em 0em;

        text-align: center;
        font-family: 'Share Tech';
        font-size: 1.8em;
    }

    .box-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        
        padding: 0em 5em;

        align-items: center;
    }


`

export { Container }