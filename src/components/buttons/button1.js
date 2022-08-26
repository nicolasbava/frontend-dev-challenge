import React from 'react';
import * as v from '../../assets/js/variables'
import styled from 'styled-components';

const sendAlert = () => alert('Gracias por suscribirse')

const Button1 = ({ text }) => {
    return (
        <Button onClick={()=> sendAlert()}>
            {text}
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    background: #FCDDEC;
    color: ${v.INDIGO};
    outline: 2px solid ${v.GREY_200};
    border-radius: 10px;
    padding: 8px 8px;
    border: none;
    margin-left: 8px;
    transition: all 300ms ease;
    cursor:pointer;
    font-weight: bold;
    font-family: 'Source Sans Pro';
    text-align: center;
    align-items: center;
    justify-content: center;
    
    span {
        display: none;
      
    }

    &:hover span {
        display: block;
    }

    &:hover {
        box-shadow: -3px 3px ${v.PINK};
        transform: scale(1.0125);
        /* color: white; */
        /* border: ${v.PINK} ;
        outline: ${v.GREY_400}; */
    }
`;

export default Button1;
