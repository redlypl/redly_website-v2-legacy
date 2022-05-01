import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/poppins"

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