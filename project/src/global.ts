import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  html, body, #root {
    height: 100%;
    width : 100%;
    scroll-behavior: smooth;
    background-color: #ffffff;
    -ms-overflow-style: none;
    scrollbar-width: 2rem;
  }

  :root {
    --primary-color: #f71963;
    --text-gray: #9F9F9F;
    --white-text: #fff;
  }

  body {
    &::-webkit-scrollbar {
        width: .5rem;
      }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 4rem;
    }
  }

  h1, h2, h3, h4, h5, span, button, p  {
    font-family: 'Poppins', sans-serif;
    color: #949494;
  }

  textarea {
    resize: none; 
  }

  textarea, select, input, input:focus, textarea:focus, select:focus{
    border: 0;
    outline: none;
  }

  input {
    width: 100%;
  }

  a {
    list-style: none;
    text-decoration: none;
    cursor: pointer;
  }

  button, input {
    text-decoration: none;
  }
`;
