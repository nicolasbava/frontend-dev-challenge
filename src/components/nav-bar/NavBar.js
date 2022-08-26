import React from 'react';
import styled from 'styled-components'
import * as v from '../../assets/js/variables'

import logo from '../../assets/img/nav-bar/nav-logo.png'
import iconHamb from '../../assets/img/nav-bar/nav-hamb.svg'
import iconSearch from '../../assets/img/nav-bar/nav-search.svg'

const NavBar = () => {
    return (
        <NavBarContainer>
            <img src={iconHamb} ></img>
            <img src={logo} ></img>
            <img src={iconSearch} ></img>
        </NavBarContainer>
    );
}

const NavBarContainer = styled.nav`
    background: ${v.white};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    position: fixed;
    width: 100%;
`


export default NavBar;
