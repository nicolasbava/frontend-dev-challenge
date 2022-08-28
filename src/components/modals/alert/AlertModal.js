import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { setAlertOpen } from '../../../toolkit/reducer';
import * as v from '../../../assets/js/variables'

import logo from '../../../assets/img/modal--icon--butterfly.png'
import closeIcon from '../../../assets/img/modal--icon--cross.png'




const AlertModal = () => {

    const dispatch = useDispatch()


    const closeAlert = () => {
        dispatch(setAlertOpen());
    }

    return (
        <StyledAlert>
            <div className='alert__frame'>
                <div className='alert__frame--header'>
                    
                    <img className='alert__frame--icon' src={closeIcon} onClick={() => closeAlert()}></img>
                </div>
                <div className='alert__frame--body'>
                    <img src={logo}></img>
                    GRACIAS POR SUSCRIBIRTE

                    <p onClick={()=> closeAlert()} style={{textDecoration:'underline', cursor: 'pointer'}}>Volver al sitio</p>
                </div>
      
            </div>
        </StyledAlert>
    );
}

const StyledAlert = styled.section`
    margin: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    color: white;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;

    .alert {

        &__frame {
            background: white;
            color: ${v.INDIGO};
            width: 300px;
            height: 300px;
            
            border-radius: 16px;

            &--header {
                position:relative;
            }

            &--icon {
                cursor:pointer;
                position:absolute;
                right: 11px;
                top: 8px;
            }

            &--body {
                /* position: absolute; */
                /* display: flex; */
                /* align-items: center; */
                /* justify-content: center; */
                display: block;
                top: 29%;
                position: relative;

                img {
                    text-align: left;
                    position: relative;
                    top: -10px;
                }

                p {
                    margin-top: 50px;
                }
            }
        }
    }


`;

export default AlertModal;
