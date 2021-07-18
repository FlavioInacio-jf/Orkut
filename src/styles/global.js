import { createGlobalStyle, ThemeProvider, css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #D9E6F6;
    font: 400 1rem "Rubik", sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

// ================================================================================================================
// Login Page
// ================================================================================================================
const AlurakutLoginScreen = css`
  :root {
    --backgroundPrimary: #D9E6F6;
    --backgroundSecondary: #F1F9FE;
    --backgroundTertiary: #FFFFFF;
    --backgroundQuarternary: #BBCDE8;
    --colorPrimary: #2E7BB4;
    --colorSecondary: #388BB0;
    --colorTertiary: #2F4A71;
    --colorQuarternary: #D81D99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #C5C6CA;
    --commonRadius: 0.5rem;
  }


  .loginScreen {
    padding: 1rem;
    max-width: 1110px;
    display: grid;
    --gap: 0.75rem;
    --gutter: 1rem;
    grid-gap: var(--gap);
    grid-template-areas:
      "logoArea"
      "formArea"
      "footerArea";
    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
              "logoArea formArea"
              "logoArea formArea"
              "footerArea footerArea";
    }
    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;
      @media(min-width: 860px) {
        min-height: 368px;
      }
      p {
        font-size: 0.75rem;
        line-height: 1.2;
        &:not(:last-child) {
          margin-bottom: 0.75rem;
        }
        strong {
          color: var(--colorQuarternary);
        }
      }
      img {
        max-height: 2.8125rem;
        margin-bottom: 2.25rem;
      }
    }
    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 3.125rem;
        padding-right: 3.125rem;
        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);
        flex: 1;
        &:not(:last-child) {
          margin-bottom: var(--gap);
        }
        &:first-child {
          min-height: 224px;
          @media(min-width: 860px) {
            min-height: 282px;
          }
        }
        p {
          font-size: 0.875rem;
        }
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
        input {
          width: 100%;
          display: block;
          border: 1px solid var(--textQuarternaryColor);
          padding: 0.75rem;
          background-color: var(--backgroundTertiary);
          border-radius: var(--commonRadius);
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 0.75rem;
          border-radius: var(--commonRadius);
          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);
        }
      }
    }
    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 0.5rem;
      p {
        font-size: 0.75rem;
        text-align: center;
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
      }
    }
  }
`;

// ================================================================================================================
// Reset Styles
// ================================================================================================================
export const AlurakutStyles = css`
  *::-webkit-scrollbar {
    width: 0.5rem;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.625rem;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  a,
  button {
    cursor: pointer;
    transition: .3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: .8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
  input {
    transition: .3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 0.3125rem #33333357;
    }
  }

  ${AlurakutLoginScreen}

  @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;