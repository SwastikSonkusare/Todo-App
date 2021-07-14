import React from 'react'

import styled from "styled-components";

import bg1 from "../../assets/images/bg-desktop-dark.jpg";

const Header = () => {

    const Hero = styled.header`
        position: relative;
        background-image: url(${bg1});
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
