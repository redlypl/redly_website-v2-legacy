import { Link } from "gatsby"
import styled from "styled-components"

import Logo2 from "../../images/logo.png"

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
    background-image: url(${Logo2});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 70%;
    width: 120px;
    overflow: hidden;
    animation-name: logoShow;
    animation-duration: 0.7s;
    animation-iteration-count: 1;

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
    font: italic normal 600 18px/30px Poppins;
    color: #1F1F1F;
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
        background-color: #1F1F1F;
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
export const MobileBtn = styled.div`
    display: none !important;
    height: 25px;
    width: 35px;
    padding: 10px;
    cursor: pointer;
    
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
export const Sl = styled.div`
    background-color: #000000;
    height: 4px;
    width: 100%;
`