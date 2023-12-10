import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "kakao";
    src: url("./Kakaos.ttf");
  }

  @font-face {
    font-family: "kakaobold";
    src: url("./components/Fonts/KakaoBold.ttf");
  }

  body {
    font-family: "kakao", "kakaobold", sans-serif;
  }


`;

export default GlobalStyle;