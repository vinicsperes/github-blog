import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
  }
  
  body {
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  .titleL {
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 24px;
    :first-child {
      line-height: 130%;
    }
  }

  .titleM {
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 20px;
    :first-child {
      line-height: 160%;
    }    
  }

  .titleS {
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 18px;
    line-height: 160%;
  }
  
  .textM {  
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    :first-child {
      line-height: 160%;
    }
  }
  
  .textS {
    color: ${(props) => props.theme['base-text']};
    :first-child {
      line-height: 160%;
    }
    font-size: 14px;
  }
  
  .link {
    font-weight: bold;
    font-size: 12px;
    :first-child {
      line-height: 160%;
    }
  }
`
