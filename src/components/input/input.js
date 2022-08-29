import React from 'react';
import * as v from '../../assets/js/variables'
import styled from 'styled-components';

const Input = ({ placeholder }) => {
    return (
        <InputStyled className='hero-input' type='email' name='heroEmail' placeholder={placeholder} ></InputStyled>
    );
}


export const Textarea = ( { placeholder }) => {
    return <TextareaStyled className='hero-input' type='email' name='heroEmail' placeholder={placeholder} ></TextareaStyled>
    

}
const InputStyled = styled.input `
    overflow: hidden;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    outline: 2px ${v.GREY_100} solid;
    border: none;
    margin: 0 4px;
    color: white;
    width: 100%;

    &::placeholder {
        color: ${v.GREY_100}
    }

    &:focus {
        color: white;
        box-shadow: -1px 1px ${v.PINK}; 
    }
`

const TextareaStyled = styled.textarea `
    overflow: hidden;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    outline: 2px ${v.GREY_100} solid;
    border: none;
    margin: 0 4px;
    color: white;
    height: 100px;
    width: 100%;

    &::placeholder {
        color: ${v.GREY_100}
    }

    &:focus {
        color: white;
        
    }
`


export default Input;
