import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <h2>Contacto</h2>
            <form className='contact__form'>

                {/* Name input */}
                <label for='name'>Nombre:</label>
                <input type='text' name='name' placeholder='Inserte su nombre...'></input>

                {/* Email input */}
                <label for='email'>Email:</label>
                <input type='email' name='email' placeholder='Inserte su email...'></input>

                {/* Message input textarea */}
                <label for='message'>Mensaje:</label>
                <textarea type='text' name='message' placeholder='Inserte su mensaje...'></textarea>

                {/* Newletter checkbox */}
                <div>
                    <input type='checkbox' name='newsletter' ></input>
                    <span>Acepto recibir Newsletter por correo</span>
                </div>

                <button>Enviar mensaje</button>
            </form>
        </ContactContainer>
    );
}

const ContactContainer = styled.section`

    .contact__form {
        display: flex;
        flex-direction: column;
    }
`;

export default Contact;
