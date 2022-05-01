import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Logo2 from "../../images/logo.png"
import Logo3 from "../../images/whiteLogo.png"

export const GlobalHeaderStyle = createGlobalStyle`
    body {
        overflow: ${({setShowMenu}) => setShowMenu ? 'hidden' : 'visible'};
    }
`
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;


    @media (max-width: 768px) {
        height: 80px;
    }
`
export const Logo = styled(Link)`
    background-image: ${({setShowMenu}) => setShowMenu ? `url(${Logo3})` : `url(${Logo2})`};
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 70%;
    width: 120px;
    overflow: hidden;
    animation-name: ${({setShowMenu}) => setShowMenu ? 'logoShow1' : 'logoShow'};
    animation-duration: ${({setShowMenu}) => setShowMenu ? '0.5s' : '0.7s'};
    animation-iteration-count: 1;
    z-index: 9999999999;

    :hover {
        transition: 0.2s;
        animation-name: logoShake;
        animation-duration: 0.6s;
    }

    @keyframes logoShow {
        from {
            background-position: 0 500px;
        }
        to {
            background-position: center;
        }
    }
    @keyframes logoShow1 {
        from {
            background-position: 0 500px;
        }
        to {
            background-position: center;
        }
    }
    @keyframes logoShake {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(20deg);
        }
        75% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0);
        }
    }

    @media (max-width: 768px) {
        width: 100px;
    }
    @media (min-width: 768px) {
        background-image: url(${Logo2});
    }
`
export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 600px;
    overflow: hidden;

    @media (max-width: 1024px) {
        width: 500px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`

//hover underline width prefix
const linewidth = "80%"

export const Item = styled(Link)`
    text-align: center;
    font-weight: ${({isMobile}) => isMobile ? '600' : '500'};
    font-style: italic;
    font-size: ${({isMobile}) => isMobile ? '25px' : '18px'};
    color: ${({isMobile}) => isMobile ? 'white' : '#1F1F1F'};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    :before {
        content: '';
        height: 0%;
        width: 100%;
        background-color: white;
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: 0;
        animation-name: hoverItemBg;
        animation-duration: 0.4s;
        display: ${({isMobile}) => isMobile ? 'none' : 'block'};

        @keyframes hoverItemBg {
            from {
                height: 40%;
            }
            to {
                height: 0%;
            }
        }
    }

    :after {
        content: '';
        height: 2px;
        width: 0%;
        background-color: ${({isMobile}) => isMobile ? 'white' : '#1F1F1F'};
        position: absolute;
        left: 0;
        bottom: 0;
        animation-name: hoverItem;
        animation-duration: 0.2s;

        @keyframes hoverItem {
            from {
                width: ${linewidth};
            }
            to {
                width: 0%;
            }
        }
    }

    :hover:before {
        transition: 0.2s;
        height: 40%;
        animation-name: reverseHoverItemBg;
        animation-duration: 0.4s;

        @keyframes reverseHoverItemBg {
            from {
                height: 0;
            }
            to {
                height: 40%;
            }
        }
    }

    :hover:after {
        transition: 0.2s;
        width: ${linewidth};
        animation-name: reverseHoverItem;
        animation-duration: 0.2s;

        @keyframes reverseHoverItem {
            from {
                width: 0;
            }
            to {
                width: ${linewidth};
            }
        }
    }
`
export const MobileBtn = styled.a`
    display: none !important;
    height: 25px;
    width: 35px;
    padding: 10px;
    cursor: pointer;
    z-index: 9999999999;

    :hover {
        transform: scale(1.15);
    }
    
    @media (max-width: 768px) {
        display: block !important;
    }
`
export const MobileBtnAlign = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 25px;
    width: 30px;
    flex-direction: column;
`
export const Sla = styled.div`
    background-color: ${({setShowMenu}) => setShowMenu ? '#ffffff' : '#000000'};
    height: 4px;
    width: 100%;
    transform: ${({setShowMenu}) => setShowMenu ? 'translateY(8px) rotate(45deg)' : 'translateX(0)'};
`
export const Slb = styled.div`
    background-color: ${({setShowMenu}) => setShowMenu ? '#ffffff' : '#000000'};
    height: 4px;
    width: 100%;
    transform: ${({setShowMenu}) => setShowMenu ? 'translateX(100px)' : 'translateX(0)'};
    opacity: ${({setShowMenu}) => setShowMenu ? '0' : '1'};
`
export const Slc = styled.div`
    background-color: ${({setShowMenu}) => setShowMenu ? '#ffffff' : '#000000'};
    height: 4px;
    width: 100%;
    transform: ${({setShowMenu}) => setShowMenu ? 'translateY(-8px) rotate(-45deg)' : 'translateX(0)'};
`
export const MobileMenu = styled.div`
    background: transparent linear-gradient(162deg, #242424 0%, #212121 100%) 0% 0% no-repeat padding-box;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
    transition: 0.2s;
    transform: ${({setShowMenu}) => setShowMenu ? 'translateX(0)' : 'translateX(-5000px)'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`
export const MobileMenuInnerWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 50%;
    width: 50%;
`