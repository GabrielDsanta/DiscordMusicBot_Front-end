import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-100']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`
