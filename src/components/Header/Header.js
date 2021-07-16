import React from 'react'

import styled from "styled-components";
import bg1 from "../../assets/images/bg-desktop-dark.jpg";
import bg2 from "../../assets/images/bg-desktop-light.jpg";

const Header = ({ lightTheme }) => {

    const Hero = styled.header`
        position: relative;
        background-image: url(${lightTheme ? bg1 : bg2});
        background-repeat: no-repeat;
        background-size: cover;
        height: 300px;
    `;

    return (
        <>
            <Hero />
        </>
    )
}

export default Header
