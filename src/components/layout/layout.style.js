import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/poppins"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

export const GlobalStyle = createGlobalStyle`
    body {
        background: transparent linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%) 0% 0% no-repeat padding-box;
        margin: 0;
        padding: 0 150px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;

//temporary
        height: 3000px;

        @media (max-width: 1200px) {
            padding: 0 50px;
        }
        @media (max-width: 768px) {
            padding: 0 25px;
        }
    }
    * {
        transition: 0.2s;
    }
`
export const LayoutWrapper = styled.div`

`
export const Preloader = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
`