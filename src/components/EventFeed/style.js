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
`;
// export const Publicacao = styled.div`
//     margin: 30px 0px;
//     padding: 10px;
//     border: none;
//     border-radius: 6px;
//     background-color: blue;

//     h2{
//         margin: 0px 0px 20px 0px;
//         font-family: 'Oswald';
//         font-weight: 400;
//     }
//     p{
//         font-family: 'Oswald';
//         font-weight: 300;
//         word-spacing: 3px;
//     }
//     button{
//         margin-top: 15px;
//         border-radius: 4px;
//         border: none;
//         font-family: 'Oswald';
//         background-color: #cad9d7;
//         padding: 10px 12px 10px 12px;
//         font-size: 0.7rem;
//         letter-spacing: 1px;
//         color: #4b5755;
//         &:hover{
//             cursor: pointer;
//         }
//     }

// `;