import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/img/nav-bar/arrow-vector.png'
import * as v from '../../../assets/js/variables'
import Button1 from '../../buttons/button1';

import { useSelector } from 'react-redux/es/exports';

const ModalMenuMobile = () => {
  
    const isModalOpen = useSelector( state => state.state.isModalOpen)

    const menu = useRef()

    useEffect(() => {
        
        if(isModalOpen){
            menu.current.style.opacity = '1'
            menu.current.style.transform = 'translateX(00%)'
        } if(!isModalOpen) {
            menu.current.style.opacity = '0'
            menu.current.style.transform = 'translateX(-100%)'
        }

    }, [isModalOpen]);

  

    return (
        <MenuMobileContainer ref={menu} >
            <Modal>
                <div className='menu__search'>
                    <input className='menu__search--input' type='text' placeholder='Buscar...'></input>
                    <Button1 text='Buscar'/>
                    {/* <button>Buscar</button> */}
                </div>
                <ul>
                    {/* TITLE 1 */}
                    <li>
                        <h2 className='menu__item--title'>Embarazo</h2>
                        <ul>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* TITLE 2 */}
                    <li>
                        <h2 className='menu__item--title'>Crecimiento</h2>
                        <ul>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                            <li>
                                <div className='menu__item--cont'>
                                    <p>Quiero ser mama  </p>
                                    <img src={arrow}></img>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Modal>
        </MenuMobileContainer>
    );
}


const Modal = styled.article`

    background: white;
    color: grey;
    margin-top: 5px;
    text-align: left;
    padding: 20px;
    max-width: 250px;

    border-radius: 0 15px 15px 0;
    transition: opacity 100ms ease;

    .menu {

        &__item--title {
            color: ${v.PURPLE};
            letter-spacing: 1px;
            border-bottom: 2px ${v.GREY_200} solid;
        }

        &__item--cont {
            display:flex;
            justify-content: space-between;
            align-items: center;
            transition: all 500ms ease;

            &:hover {
                /* text-shadow: -0.2px 0.2px ${v.PINK}; */
                /* font-weight: bold; */
                /* color: #000; */
                transform: scale(1.0125);
            }

            
            p {
                margin: 1px 0;
            }
        }

    }

    .menu__search {
        display: flex;
    
        &--input {
            overflow: hidden;
            padding: 10px;
            border-radius: 10px;
            outline: 2px ${v.GREY_200} solid;
            border: none;
            margin: 0 4px;
        }

        &--input::placeholder {
            color: ${v.GREY_200}
        }
    }
    ul {
        margin: 10px 0;
        padding: 0;
    }
    li {
        list-style: none;
        text-align: left;
        margin: 10px 0;
        cursor: pointer;
    }

    @media (min-width: 400px){
        
            padding: 50px;
            min-width: 300px;
        
    }
`;


const MenuMobileContainer = styled.section`
    opacity: 0;
    z-index: 100;
    position:fixed;
    top: 55px;
    left: 0;
    background: rgba(0,0,0,0.7);
    right: 0;
    bottom: 0;
    transition: transform 800ms ease;
    transition: all 500ms ease;

`;

export default ModalMenuMobile;
