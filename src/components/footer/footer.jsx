import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FooterWrapper,
    FooterWrapperAlign,
    P,
    SpaceLine,
    SocialWrapper,
    Icon,

} from "./footer.style"

import fb from "../../images/socialIcons/fb.png"
import ig from "../../images/socialIcons/ig.png"
import github from "../../images/socialIcons/github.png"
import linkedin from "../../images/socialIcons/linkedin.png"
import behance from "../../images/socialIcons/behance.png"

const socialIcons = [
    {
        icon: fb,
        url: 'https://google.com',
        size: '45%'
    },
    {
        icon: ig,
        url: 'https://google.com',
        size: '85%'
    },
    {
        icon: github,
        url: 'https://google.com',
        size: '85%'
    },
    {
        icon: linkedin,
        url: 'https://google.com',
        size: '70%'
    },
    {
        icon: behance,
        url: 'https://google.com',
        size: '100%'
    },
]

const Footer = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const FooterVariant = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.1
            }
        }
    }

    return (
        <FooterWrapper>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={FooterVariant}
            >
                <FooterWrapperAlign>
                    <P>&copy; Redly {new Date().getFullYear()}</P>
                    <SpaceLine />
                    <SocialWrapper>
                        {socialIcons.map((item) => {
                            return (
                                <a href={item.url}>
                                    <Icon key={item.icon} icon={item.icon} bgSize={item.size} />
                                </a>
                            )
                        })}
                    </SocialWrapper>
                </FooterWrapperAlign>
            </motion.div>
        </FooterWrapper>
    )
}

export default Footer