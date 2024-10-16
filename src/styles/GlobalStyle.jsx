import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: "Roboto Condensed", sans-serif;
    }

    ul, li, dl, p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        &:hover {
            text-decoration: none;
            color: inherit;
        }
    }

    input {
        &[type='number'] {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .contained {
        object-fit: contain;
    }

    .unset {
        object-fit: unset;
    }
`;

export default GlobalStyle;