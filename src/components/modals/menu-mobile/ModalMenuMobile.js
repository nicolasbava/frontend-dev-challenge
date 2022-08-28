import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/img/nav-bar/arrow-vector.png'
import * as v from '../../../assets/js/variables'
import Button1 from '../../buttons/button1';

import { useSelector } from 'react-redux/es/exports';

const ModalMenuMobile = () => {
    
    // const isModalOpen = useSelector( state => state.state.isModalOpen)


    // const leftValue = () => {

    //     if(isModalOpen) {
    //         return '50px'
    //     } else {
    //         return '0px'
    //     }style={{left: `${leftValue()}`}}

    // }
    
    

    return (
        <MenuMobileContainer >
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
                </ul>
            </Modal>
        </MenuMobileContainer>
    );
}


const Modal = styled.article`
    background: white;
    color: grey;
    margin-top: 6px;
    text-align: left;
    padding: 50px;
    max-width: 300px;
    border-radius: 0 15px 15px 0;
    transition: all 500ms ease;

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
    }
`;


const MenuMobileContainer = styled.section`
    z-index: 100;
    position:fixed;
    top: 57px;
    left: 0;
    background: rgba(0,0,0,0.7);
    right: 0;
    bottom: 0;
    transition: all 500ms ease;

`;

export default ModalMenuMobile;
