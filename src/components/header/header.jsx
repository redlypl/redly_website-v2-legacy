import React from "react"
import {
    HeaderWrapper,
    Logo,
    Navbar,
    Item,
    MobileBtn,
    MobileBtnAlign,
    Sl,


} from "./header.style"
import { motion } from "framer-motion";

const navbarData = [
    {
        title: "Oferta",
        link: "/oferta"
    },
    {
        title: "Realizacje",
        link: "/realizacje"
    },
    {
        title: "Blog",
        link: "/blog"
    },
    {
        title: "O nas",
        link: "/o-nas"
    },
    {
        title: "Kontakt",
        link: "/kontakt"
    },
]

const ItemVariant = {
    initial: {
        y: 80,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.9,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
const MenuBtnVariant = {
    initial: {
        y: 80,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
        },
    },
};

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo to="/" />
            <Navbar>
                {navbarData.map((navbar) => {
                    return (
                        <motion.div
                            variants={ItemVariant}
                            initial="initial"
                            animate="animate"
                        >
                            <Item to={navbar.link} key={navbar.title}>{navbar.title}</Item>
                        </motion.div>
                    )
                })}
            </Navbar>
            <MobileBtn>
                <motion.div
                    variants={MenuBtnVariant}
                    initial="initial"
                    animate="animate"
                >
                    <MobileBtnAlign>
                        <Sl /><Sl /><Sl />
                    </MobileBtnAlign>
                </motion.div>
            </MobileBtn>
        </HeaderWrapper>
    )
}

export default Header