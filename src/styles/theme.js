import { createGlobalStyle } from "styled-components"

export const defaultTheme = {
  colors: {
    primary: '#252525',
    secondary: '#333',
    text: '#fff',
    link: '#09f'
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font: 400 16px Proxima Nova, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.link};
  }

  a:hover {
    opacity: 0.8;
  }
`