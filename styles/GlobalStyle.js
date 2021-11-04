import { createGlobalStyle } from "styled-components";
import { responsive } from "./variables/_breakpoint";
import { heading, subHeading, body } from "./variables/_text";

export const GlobalStyle = createGlobalStyle`
 
*{
  margin:0;
  padding:0;
  font-family:"Poppins", sans-serif;
  box-sizing:border-box;
}
body{
  overflow-x:hidden;
}

li{
    list-style:none;
}
ol,ul{
  padding:0 !important;
}


h1,h2,h3,h4,h5 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}



pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
  text-decoration:none;
 
}
/**
    classes utilitaires
 */
.heading{
    ${heading};
}
.subheading{
  ${subHeading}
}
.description{
  ${body}
}
`;
export const theme = {
  colors: {
    primary: "#002954",
    secondary: "#FF9100",
    text: "#161617",
    grey: "#f1F1F1",
    textLight: "#ffffff",
  },
};
