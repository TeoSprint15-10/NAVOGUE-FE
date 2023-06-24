import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset}
  {
    box-sizing: border-box;
    }
    body {
      width: 100vw;
      margin: 0;
      height: 100vh;
    }
    
    #root {
      height: 100%;
    }
    
    main {
      width: 80%;
      margin: 0 auto;
      height: 100%;
    }
`;

export default GlobalStyles;
