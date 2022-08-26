import React from 'react';
import styled from 'styled-components';

const ModalMenuMobile = () => {
    return (
        <MenuMobileContainer>
            <Modal>

                <div className='menu__search'>
                    <input type='text'></input>
                    <button>Buscar</button>
                </div>
                <ul>
                    <li>mas elementos</li>
                    <li>mas elementos</li>
                    <li>mas elementos</li>
                    <li>mas elementos</li>
                    <li>mas elementos</li>
                    <li>mas elementos</li>
                </ul>
            </Modal>
        </MenuMobileContainer>
    );
}


const Modal = styled.article`
    background: white;
    color: grey;
    margin-top: 56px;
    text-align: left;
    padding: 50px;
    max-width: 300px;

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
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    right: 0;
    bottom: 0;

    /* display: none; */

`;

export default ModalMenuMobile;
