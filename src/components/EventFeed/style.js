import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    margin: 50px 0px;
    padding: 20px 0px 20px 0px;
    justify-content: space-between;
    border-radius: 50px;
    border-top-left-radius:0px;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
    button{
        padding: 10px;
        margin: 5px 0px;
        border: none;
        border-radius: 6px;
        text-decoration: none;
        background: #8b9398;
        color: #fff;
        &:hover{
            cursor: pointer;
            background: #8b9000;

        }
    }
    .box-info{
        width: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .box-img{
        width: 50%;
    }
    .titulo{
        margin-bottom: 100px;
        /* background-color: green; */
    }
    .infos{
        /* background-color: red; */
    }
    img{
        width: 500px;
        max-height: 100%;
        margin-left: 10px;
    }
    h3{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        margin: 0px;
    }
    p{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p.preco{
        margin: 2px 0px;
        font-size: 1.3rem;
        color: green;
        font-weight: 700;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
    }
    .quantidade {
        display: flex;
        align-items: center;
        margin-top: 10px;
        label {
            margin-right: 10px;
        }
        input {
            width: 60px;
            margin-right: 10px;
            padding: 5px;
        }
    }
`;
