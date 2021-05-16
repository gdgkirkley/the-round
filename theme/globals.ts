import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        /* Primary */
        --colorGold0: #FFF5D6;
        --colorGold20: #FDE7A5;
        --colorGold40: #F5D77A;
        --colorGold60: #F2C94C;
        --colorGold80: #EEBA1B;
        --colorGold100: #D29F04;

        /* Accent */
        --colorBlue0: #E1F7FE;
        --colorBlue20: #AFEAFD;
        --colorBlue40: #7DDDFC;
        --colorBlue60: #56CCF2;
        --colorBlue80: #2D9CDB;
        --colorBlue100: #2F80ED;
        --colorNavy: #004b91;
        --colorMidnight: #133a5e;

        /* Warning */
        --colorRed0: #ff5247;
        --colorRed100: #e60023;

        /* Greys */
        --colorGrey0: #F2F2F2;
        --colorGrey20: #E0E0E0;
        --colorGrey40: #BDBDBD;
        --colorGrey60: #828282;
        --colorGrey80: #4F4F4F;
        --colorGrey100: #333333;
        --colorGrey200: #111;
        --colorGrey300: #000;

        /* transparent colors */
        --colorTransparentDarkGrey: rgba(51, 51, 51, 0.8);
        --colorTransparentWhite: rgba(255, 255, 255, 0.8);
        --colorTransparentGrey60: rgba(0, 0, 0, 0.06);
        --colorTransparentGrey100: rgba(0, 0, 0, 0.1);
        --colorTransparentGrey500: rgba(0, 0, 0, 0.1);
        --colorTransparentGrey800: rgba(0, 0, 0, 0.8);

        /* intent colors */
        --background: var(--colorGrey0);
        --textColor: var(--colorGrey200);

        /* elevation */
        --level1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --level2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --level3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --level4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    *:focus {
        outline: none;
        box-shadow: 0 0 0 2pt var(--colorBlue100);
    }

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        font-size: 112.5%;
    }

    body {
        margin: 0;
        background: var(--background);
        color: var(--textColor);
        font-family: 'Karla', sans-serif;
        font-weight: 400;
        line-height: 1.75;
    }

    h1, h2, h3, h4, h5 {
        margin: 3rem 0 1.38rem;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        line-height: 1.3;
    }

    h1 {
        margin-top: 0;
        font-size: 3.052rem;
    }

    h2 {font-size: 2.441rem;}

    h3 {font-size: 1.953rem;}

    h4 {font-size: 1.563rem;}

    h5 {font-size: 1.25rem;}

    h6 {font-size: 1rem;}

    small, .text_small {font-size: 0.8rem;}
    
    P {
        max-width: 40em;
    }

    a {
        background-color: transparent;
        color: var(--colorGold100);
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }

    a:hover {
        color: var(--colorGold80);
        border-bottom: 1px solid var(--colorGold80);
    }

    a:focus {
        outline: none;
        border-bottom: 1px solid var(--colorGold80);
    }

    b,
    strong {
    font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    .dark {
        --background: var(--colorMidnight);
        --textColor: var(--colorGrey0);
    }
`;
