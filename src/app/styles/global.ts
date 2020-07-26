import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Roboto, Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        color: ${(props) => props.theme.colors.text.primary};
        background: ${(props) => props.theme.colors.background.main};
    }

    #root, body, html {
        height: 100%;
    }

    #root{
        max-width: 1080px;
        height: 100%;
        margin: 0 auto;   
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.title};
        font-family: Ubuntu;
        line-height: 1;
    }

    h1 {
        font-size: ${(props) => props.theme.fontSize.xlarge}px;
    }

    h2 {
        font-size: ${(props) => props.theme.fontSize.large}px;
    }

    h3, h4, h5, h6 {
        font-size: ${(props) => props.theme.fontSize.medium}px;
    }

    span{
        font-size: ${(props) => props.theme.fontSize.medium}px;
    }

    button {
        cursor: pointer;
    }    
`;
