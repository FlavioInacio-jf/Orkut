import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px 0 #EBEBEB;
  padding: 1rem;

  /* CSS Pré-Pronto */
  margin-bottom: 0.625rem;
  .boxLink {
    font-size: 0.875rem;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .description {
    color: #999999;
    font-size: 0.75rem;
    margin-top: 0.3125rem;
    margin-bottom: 0.3125rem;
    text-align: left;
    line-height: 1rem;
  }
  .frases-list {
    list-style-type: none;

    display: flex;
    flex-direction: column;
    li {
      padding: 0px.7262rem 1rem;
      background-color: #D9E6F6;

      display: flex;
      align-items: center;

      gap: 1.29rem;

      &:first-child {
        border-radius: 0.3125rem 0.3125rem 0 0;
      }
      &:last-child {
        border-radius: 0 0 0.3125rem 0.3125rem ;
      }
      &:nth-last-child(odd) {
        background-color: #F1F9FE;
      }
      header {
        display: flex;
        align-items: center;
        img {
          max-width: 100px;
          border-radius: 100%;
        }
      }
      main {
        font-size: 1.125rem;
        padding: 2.375rem 0;
        color: #2E7BB4;

        div {
          display: flex;
          gap: 1rem;
          color: #5A5A5A;
          font-size: 0.875rem;
          padding-top: .5rem;
        }

      }
    }
  }
  .frase-dia {
    display:  flex;
    align-items: center;
    gap: 0.5rem;
    font-family: Verdana, sans-serif;
    font-size: 0.75rem;
    color: #999999;
    p {
      display: flex;
      gap: 0.5rem;
    }
    span {
      font-weight: bold;
    }

    .form-frase {
      display: flex;
      align-items: stretch;
      gap: 0.5rem;
      width: 100%;

      button {
        align-self: stretch;
        align-content: stretch;
      }
      input {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 0;
      }

      div {
        display: flex;
        gap: 0.5rem;

        button {
          &:last-child {
            background: #D81D99 !important;
          }
        }
      }
    }
  }
  .title {
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .subTitle {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }
  .smallTitle {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1.25rem;
  }
  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 0.875rem 1rem;
    margin-bottom: 0.875rem;
    border-radius: 0.3125rem;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 0.5rem 0.75rem;
    color: #FFFFFF;
    border-radius: 0.3125rem;
    background-color: #6F92BB;
  }
  .footer {
    display: flex;

  }
`;

export default Box;