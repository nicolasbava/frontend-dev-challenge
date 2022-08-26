import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import img1 from '../../assets/img/hero/hero-img1.png'
import img2 from '../../assets/img/hero/hero-img2.png'
import img3 from '../../assets/img/hero/hero-img3.png'


const images = [img1, img2, img3];                                  // images array to put as hero image 

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);            // state to look for an image in images array


    useEffect(() => {
        const intervalId = setInterval(() => {                      // function to change hero image automatically
            if(currentIndex === images.length - 1) {                // counter = 0 if the number reach the end of the array
                setCurrentIndex(0);                                 
            } 
            else {
                setCurrentIndex(currentIndex + 1);                  // adds 1 to counter if has not reached the end of the array
            }
        }, 5000)

        return () => clearInterval(intervalId);


    }, [currentIndex]);

        return (
            <HeroContainer>
                <img className='hero-img'  src={images[currentIndex]} ></img> 
                <div className='hero-title'>
                    <h1>Su viaje de <span className='hero-title__span--pink'>salud emocional</span>comienza aqui.</h1>
                    <h2>Conoce nuestros profesionales con licencia.</h2>
                    <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
                    <HeroForm>
                        <input type='email' name='heroEmail' placeholder='Inserte su email' ></input>
                        <button>OK!</button>
                    </HeroForm>
                </div>
            </HeroContainer>
        );
}

const HeroContainer = styled.section`
    padding-top: 175px;

    .hero-title {
        padding: 100px 50px;
    }

    .hero-title__span--pink {
        color:${v.pink}
    }

`;


const HeroForm = styled.form`
    padding: 50px
`;



export default Hero;
