import styled from "styled-components"

export const FooterWrapper = styled.footer`
    background: transparent linear-gradient(88deg, #1C1C1C 0%, #343434 100%) 0% 0% no-repeat padding-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterWrapperAlign = styled.div`
    height: 70px;
    width: 450px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        width: 300px;
    }
`
export const P = styled.p`
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0px;
    color: #FFFFFF;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`
export const SpaceLine = styled.div`
    height: 30px;
    width: 2px;
    background-color: #707070;

    @media (max-width: 768px) {
        height: 25px;
    }
`
export const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;

    @media (max-width: 768px) {
        width: 125px;
    }
`
export const Icon = styled.div`
    background-image: ${props => `url(${props.icon})`};
    background-size: ${props => `${props.bgSize}`};
    background-repeat: no-repeat;
    background-position: center;
    height: 20px;
    width: 20px;

    :hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        height: 15px;
        width: 15px;
    }
`