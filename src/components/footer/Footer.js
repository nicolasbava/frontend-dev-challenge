import React from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import logo from '../../assets/img/footer-logo-indigo.svg'
import separator from '../../assets/img/footer-separator-indigo.png'

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer__col'>
                <img className='footer__logo' src={logo} ></img>
                <p className='footer__text'>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.
                Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>

            </div>
            <div className='footer__col'>
                <img className='footer__line' src={separator} ></img>

                <ul className='footer__list'>
                    <li>Política de Cookies</li>
                    <li>Política de Privacidad</li>
                    <li>Términos y condiciones de uso</li>
                    <li>Cláusula Informativa de Consentimiento</li>
                </ul>
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background: ${v.GREY_100};
    padding: 75px 50px;
    color: ${v.INDIGO};

    .footer {
        &__logo {
            /* padding: 0 0 50px; */
            transition: all 400ms ease;
            cursor: pointer;
            fill: ${v.INDIGO};
        }

        &__logo:hover {
            transform: scale(1.05);
            box-shadow:-3px 3px ${v.INDIGO};
        }

        &__text {
            padding: 0 0 60px;
            line-height: 1.2;

        }

        &__list {
            margin-top: 75px;
            padding: 0;
            margin: 0;

          
            li {
               list-style: none;
               line-height: 3;
            }

            li:hover {
                color: ${v.PINK};
                cursor: pointer;
            }
        }
    }

    @media (min-width: 750px) {
        display: flex;
        justify-content: space-around;
        margin: 0;

        .footer {

            &__col {
                width: 40%;
                margin: auto;
            }

            &__logo {
                margin-bottom: 3%;
            }

            &__text{
                margin: 0;
                padding-bottom: 0;
                font-size: 13px;
            }

            &__line {
                display:none;
            }

            &__list {
                font-size: 14px;
            }
        }
    }
`;

export default Footer;
