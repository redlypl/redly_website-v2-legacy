import React from "react"
import Helmet from "react-helmet"
import {
    GlobalStyle,
    LayoutWrapper,

} from "./layout.style"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = (props, { isVisible }) => {
    return (
        <LayoutWrapper>
            <Helmet>
                <title>Redly - Agencja Reklamowa</title>
            </Helmet>
            <GlobalStyle />
            <Header />
            {props.children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout