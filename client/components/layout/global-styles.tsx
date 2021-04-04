import { Global, css } from "@emotion/react";

const GlobalStyles = (): JSX.Element => (
  <Global
    styles={css`
      :root {
        --white: #fffffe;
        --black: #000000;
        --grey-s: #bbbbbb;
        --grey-m: #888888;
        --grey-l: #818181;
        --orange-s: #e0915c;
        --orange-m: #da8044;
        --orange-l: #a85f2e;

        /* element color */
        --background: var(--white);
        --headline: var(--orange-l);
        --p: var(--black);
        --btn-text: var(--white);
        --btn-bg: var(--orange-m);
        --secondary: var(--orange-s);
        --highlight: var(--orange-m);
        --stroke: var(--orange-m);
        --link: var(--grey-l);
        /* elevations */
        --sh-xs: 0 0 0 1px var(--transparentDark);
        --sh-s: 0 1px 2px 0 var(--transparentDark);
        --sh: 0 1px 3px 0 var(--transparentDark2), 0 1px 2px 0 var(--transparentDark3);
        --sh-m: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --sh-l: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --sh-l: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --sh-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        --sh-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
        --sh-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        --sh-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
        /* Typography */
        --heading-font: "Poppins", sans-serif;
        --body-font: "Anonymous Pro", monospace;
        --font-weight: 400;
        --line-body-height: 1.75;
        --heading-line-height: 1.3;
        --h1: 4.209rem;
        --h2: 3.157rem;
        --h3: 2.369rem;
        --h4: 1.777rem;
        --h5: 1.333rem;
        --small: 0.75rem;
        --app-width: 970px;
        --border-radius-m: 4px;
        --border-radius-l: 6px;
        --border-radius-xl: 8px;
        /* transition */
        --transition-s: 300ms ease-in-out all;
      }
      *::before,
      *::after,
      * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      html {
        font-size: 100%; /*16px*/
      }
      body {
        --background: var(--white);
        --headline: var(--orange-l);
        --p: var(--black);
        --btn-text: var(--white);
        --btn-bg: var(--orange-m);
        --secondary: var(--orange-s);
        --highlight: var(--orange-m);
        --stroke: var(--orange-m);
        --link: var(--grey-l);

        font-family: var(--body-font);
        font-weight: var(--font-weight);
        line-height: var(--line-body-height);
      }
      p {
        margin-bottom: 1rem;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-bottom: 1rem;
        font-family: var(--body-font);
        font-weight: var(--font-weight);
        line-height: var(--heading-line-height);
      }
      h1 {
        margin-top: 0;
        font-size: var(--h1);
      }
      h2 {
        font-size: var(--h2);
      }
      h3 {
        font-size: var(--h3);
      }
      h4 {
        font-size: var(--h4);
      }
      h5 {
        font-size: var(--h5);
      }
      small {
        font-size: var(--small);
      }
      a {
        text-decoration: none;
        color: var(--stroke);
      }
      ul {
        list-style: none;
      }
      .btn-reset {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        transition: var(--transition-s);
      }
    `}
  />
);

export default GlobalStyles;
