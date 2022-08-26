import React from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

const sendAlert = () => {
    alert('Mensaje enviado.')
}

const Contact = () => {
    return (
        <ContactContainer>
            <h2 className='contact__title'>Contacto</h2>
            <form className='contact__form'>

                {/* Name input */}
                <label className='label contact__label' for='name'>Nombre:</label>
                <input className='contact__input' type='text' name='name' placeholder='Inserte su nombre...'></input>

                {/* Email input */}
                <label className='label contact__label' for='email'>Email:</label>
                <input className='contact__input' type='email' name='email' placeholder='Inserte su email...'></input>

                {/* Message input textarea */}
                <label className='label contact__label' for='message'>Mensaje:</label>
                <textarea className='contact__input' type='text' name='message' placeholder='Inserte su mensaje...'></textarea>

                {/* Newletter checkbox */}
                <div  className='contact__input--checkbox'>
                    <input type='checkbox' name='newsletter' ></input>
                    <span>Acepto recibir Newsletter por correo</span>
                </div>

                <button onClick={( ) => sendAlert()}>Enviar mensaje</button>
            </form>
        </ContactContainer>
    );
}

const ContactContainer = styled.section`
    padding: 100px 50px;
    text-align: center;

    .contact {
        &__title {
            font-size: 40px;
        }

        &__form {
            display: flex;
            flex-direction: column;
        }       

        &__label {
            text-align: left;
            margin-top: 25px;
        }

        &__input {
            margin: 10px 0;
            background: transparent;
            border: none;
            border-bottom: solid white 1px;
            color: white;
        }

        &__input--checkbox {
            border-bottom: none;
            margin: 50px 0;
        }

        &__input::placeholder {
            color: white;
        }

        &__input:focus {
            outline: none; 
            color: white;
        }
    }

`;

export default Contact;
