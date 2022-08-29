import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import * as v from '../../assets/js/variables'

import { useDispatch, useSelector } from 'react-redux'
import { setMobileMenuOpen } from '../../toolkit/reducer'

import logo from '../../assets/img/nav-bar/nav-logo.png'
import iconHamb from '../../assets/img/nav-bar/nav-hamb.svg'
import iconClose from '../../assets/img/nav-bar/arrow-close.svg'
import iconSearch from '../../assets/img/nav-bar/nav-search.svg'



const NavBar = () => {

    const isModalOpen = useSelector((state) => state.state.isModalOpen)
    const dispatch = useDispatch()

    const open = useRef()
    const close = useRef()



    useEffect(() => {

        if(isModalOpen === true ){
            open.current.style.display = 'none'
            close.current.style.display = 'block'
        } 

        if(isModalOpen === false){
            close.current.style.display = 'none'
            open.current.style.display = 'block'
        }

    }, [isModalOpen]);

    


    return (
        <NavBarContainer>
            <img ref={open} className='shrink' onClick={() => dispatch(setMobileMenuOpen())} src={iconHamb} ></img>
            <img ref={close} className='shrink close' onClick={() => dispatch(setMobileMenuOpen())} src={iconClose} ></img>
            <img src={logo} ></img>
            <img className='shrink' onClick={() => dispatch(setMobileMenuOpen())} src={iconSearch} ></img>
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
        max-width: 50%;
    }

    .shrink {
        min-width: 29px;
        transition: all 500ms ease;

        &:hover {
            transform: scale(1.0125);
        }
    }
    
    .close {
        padding: 9px 0 11.3px 0;
        margin-left: 10px;
        margin-right: 6px
    }
`


export default NavBar;
