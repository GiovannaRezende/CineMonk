import styled from "styled-components";


const Container = styled.div`
    
    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1em;
    }

    header h1{
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

        font-family: 'Share Tech';
        font-size: 2.3em;
        margin-left: 2em;
    }

    .box-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        padding: 3em;

        align-items: center;
        justify-content: space-evenly;
    }


`   
export { Container };