import React from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import logo from '../../assets/img/footer-logo-indigo.svg'
import separator from '../../assets/img/footer-separator-indigo.png'
import separatorDesktop from '../../assets/img/footer--lines--desktop.png'

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer__col--up'>
                <img className='footer__logo' src={logo} ></img>
                <p className='footer__text'>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.
                Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>

            </div>

            <img className='footer__line--mobile' src={separator} ></img>
            <img className='footer__line--desktop' src={separatorDesktop} ></img>

            <div className='footer__col'>
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
    padding: 20% 10%;
    color: ${v.INDIGO};

    .footer {

        &__logo {
            transition: all 400ms ease;
            cursor: pointer;
            fill: ${v.INDIGO};
            margin-bottom: 30px;
        }

        &__logo:hover {
            transform: scale(1.05);
            box-shadow:-3px 3px ${v.INDIGO};
        }

        &__text {
            padding: 0 0 30px;
            line-height: 1.2;

        }

        &__list {
            padding: 0;
            margin: 0;
            margin-top: 40px;

          
            li {
               list-style: none;
               line-height: 3;
            }

            li:hover {
                color: ${v.PINK};
                cursor: pointer;
            }
        }

        &__line--mobile {
            width: 90%;

        }

        &__line--desktop {
            display: none;
        }
    }

    @media (min-width: 750px) {
        display: flex;
        justify-content: space-around;
        margin: 0;
        flex-direction: column;
        padding: 30px 10%;


        .footer {

            img {
                width: 80%;
            }

            &__col {
                width: 80%;
                display: flex;
                margin: 30px auto;

                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    
                    li {
                        padding: 10px 13px;
                    } 
                }


                &--up {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                    margin: 30px auto;

                }
            }

            &__logo {
                margin-bottom: 3%;
            }

            &__text{
                margin: 0;
                padding-bottom: 0;
                font-size: 13px;
                text-align: left;
                margin-left: 50px;
                line-height: 1.5;
            }
            
            &__list {
                font-size: 14px;
            }
            
            &__line--mobile {
                display:none;
            }

            &__line--desktop {
                display: block;
                width: 68%;
                margin: 0 auto;
            }
        }

    }
`;

export default Footer;
