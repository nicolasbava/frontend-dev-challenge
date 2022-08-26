import React from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import icon from '../../assets/img/testimonials-icon.png'
import user from '../../assets/img/testimonials-user.png'
import markers from '../../assets/img/testimonials-markers.png'
import frame from '../../assets/img/testimonials-frame.png'


const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <img className='testimonial__icon' src={icon}></img>
            <img className='testimonial__user' src={user}></img>
            <p className='testimonial__p'>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</p>
            <h4 className='testimonial__name'> ~ Maria Montessori ~</h4>
            <img className='testimonial__markers' src={markers} ></img>
            <img className='testimonial__frame' src={frame} ></img>
        </TestimonialsContainer>
    );
}

const TestimonialsContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 100px 50px 150px;
    background: ${v.GREY_100};

    .testimonial__icon {
        max-width: 50px;
    }

    .testimonial__user {
        max-width: 200px;
        margin: 60px auto 40px;
    }

    .testimonial__p {
        font-family: ${v.TESTIMONIAL__P};
        color: ${v.GREY_400};
    }

    .testimonial__name {
        color: ${v.GREY_700};
        text-align: right;
    }

    .testimonial__markers {
        max-width: 200px;
        margin: 10px auto;
    }
   
    .testimonial__frame {
        margin-top: 50px;
        max-width: 200px;
        position: absolute;
        bottom: -50px;
        left: 0;     
    }
`;

export default Testimonials;
