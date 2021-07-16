import React from 'react'

import styled from "styled-components";
import bg1 from "../../assets/images/bg-desktop-light.jpg";
import bg2 from "../../assets/images/bg-desktop-dark.jpg";

import smallBg1 from '../../assets/images/bg-mobile-light.jpg';
import smallBg2 from '../../assets/images/bg-mobile-dark.jpg';

const Header = ({ lightTheme }) => {

    const Hero = styled.header`
        position: relative;
        background-image: url(${lightTheme ? bg1 : bg2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 300px;
        
        @media only screen and (max-width: 31.25em) {
            background-image: url(${lightTheme ? smallBg1 : smallBg2});
            background-position: unset;
        }
    `;

    return (
        <>
            <Hero />
        </>
    )
}

export default Header
