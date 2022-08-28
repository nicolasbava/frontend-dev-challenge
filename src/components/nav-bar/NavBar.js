import React, { useEffect } from 'react';
import styled from 'styled-components'
import * as v from '../../assets/js/variables'

import { useDispatch, useSelector } from 'react-redux'
import { setMobileMenuOpen } from '../../toolkit/reducer'

import logo from '../../assets/img/nav-bar/nav-logo.png'
import iconHamb from '../../assets/img/nav-bar/nav-hamb.svg'
import iconClose from '../../assets/img/nav-bar/arrow-close.svg'
import iconSearch from '../../assets/img/nav-bar/nav-search.svg'



const NavBar = () => {

    const isModalOpen = useSelector((state) => state.state.isMobileMenuOpen)
    const dispatch = useDispatch()

    let icon = iconHamb

    if(isModalOpen){
        icon = iconClose
    } 

    useEffect(() => {

       icon = iconHamb

        if(isModalOpen){
            icon = iconClose
        } 

        
        return () => {
            
        };
    }, [isModalOpen]);

    


    return (
        <NavBarContainer>
            <img onClick={() => dispatch(setMobileMenuOpen())} src={icon} ></img>
            <img src={logo} ></img>
            <img onClick={() => dispatch(setMobileMenuOpen())} src={iconSearch} ></img>
        </NavBarContainer>
    );
}

const NavBarContainer = styled.nav`
    background: ${v.WHITE};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 103;

    img {
        cursor:pointer;
    }
`


export default NavBar;
