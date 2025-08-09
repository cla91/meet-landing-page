import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-cyan-600: #4d96a9;
    --color-cyan-300: #8FE3F9;
    --color-purple-600: #855fb1;
    --color-purple-300: #d9b8ff;
    --color-slate-900: #28283d;
    --color-slate-600: #87879d;
    --color-slate-300: #d1d1df;
}
    *,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}

html {
  font-size: 62.5%; /*10px*/
}
body {
    background-color: white;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    color: var(--color-slate-600);
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: center;
    @media screen and (min-width: 64rem){
        font-size: 1.8rem;
    }
}
h1,
h2{
    color: var(--color-slate-900);
    font-weight: 900;
    
}
h1 {
font-size: 4rem;
    line-height: 1.1;
    @media screen and (min-width: 48rem){
        font-size: 4.8rem;
    }
    @media screen and (min-width: 64rem){
        font-size: 6.4rem;
    }
}
h2 {
    font-size: 3.2rem;
    line-height: 1.1;
    @media screen and (min-width: 48rem){
        font-size: 3.6rem;
    }
    @media screen and (min-width: 64rem){
        font-size: 4rem;
    }
}
a {
  color: white;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
footer {
    color: white;
}

`;
export default GlobalStyles;
