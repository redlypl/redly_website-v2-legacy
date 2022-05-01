import React, { useEffect, useState } from "react"
import {
    GlobalHeaderStyle,
    HeaderWrapper,
    Logo,
    Navbar,
    Item,
    MobileBtn,
    MobileBtnAlign,
    Sla,
    Slb,
    Slc,    
    MobileMenu,
    MobileMenuInnerWrap,
    

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
const MobileMenuVariant = {
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

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <HeaderWrapper id="classname1">
            <GlobalHeaderStyle setShowMenu={showMenu} />
            <Logo to="/" setShowMenu={showMenu} />
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
            <MobileBtn setShowMenu={showMenu} onClick={() => setShowMenu(!showMenu)} href="#classname1">
                <motion.div
                    variants={MenuBtnVariant}
                    initial="initial"
                    animate="animate"
                    key={showMenu}
                >
                    <MobileBtnAlign>
                        <Sla setShowMenu={showMenu} />
                        <Slb setShowMenu={showMenu} />
                        <Slc setShowMenu={showMenu} />
                    </MobileBtnAlign>
                </motion.div>
            </MobileBtn>
            <MobileMenu setShowMenu={showMenu}>
                <MobileMenuInnerWrap>
                    {navbarData.map((navbar) => {
                        return (
                            <motion.div
                                variants={MobileMenuVariant}
                                initial="initial"
                                animate="animate"
                            >
                                <Item isMobile to={navbar.link} key={navbar.title}>{navbar.title}</Item>
                            </motion.div>
                        )
                    })}
                </MobileMenuInnerWrap>
            </MobileMenu>
        </HeaderWrapper>
    )
}

export default Header