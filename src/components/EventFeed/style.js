import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
`;
export const Publicacao = styled.div`
    margin: 30px 0px;
    padding: 10px;
    border: none;
    border-radius: 6px;

    h2{
        margin: 0px 0px 20px 0px;
        font-family: 'Oswald';
        font-weight: 400;
    }
    p{
        font-family: 'Oswald';
        font-weight: 300;
        word-spacing: 3px;
    }
    button{
        margin-top: 15px;
        border-radius: 4px;
        border: none;
        font-family: 'Oswald';
        background-color: #cad9d7;
        padding: 10px 12px 10px 12px;
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: #4b5755;
        &:hover{
            cursor: pointer;
        }
    }
`;