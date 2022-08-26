import React from 'react';
import styled from 'styled-components';

import icon from '../../assets/img/testimonials-icon.png'
import user from '../../assets/img/testimonials-user.png'
import markers from '../../assets/img/testimonials-markers.png'
import frame from '../../assets/img/testimonials-frame.png'


const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <img src={icon}></img>
            <img src={user}></img>
            <p>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</p>
            <h4> ~ Maria Montessori ~</h4>
            <img src={markers} ></img>
            <img src={frame} ></img>
        </TestimonialsContainer>
    );
}

const TestimonialsContainer = styled.section`

`;

export default Testimonials;
