import React from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import logo from '../../assets/img/footer-logo.png'
import separator from '../../assets/img/footer-separator.png'

const Footer = () => {
    return (
        <FooterContainer>
            <img className='footer__logo' src={logo} ></img>
            <p className='footer__text'>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.
            Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
            <img src={separator} ></img>
            <ul className='footer__list'>
                <li>Política de Cookies</li>
                <li>Política de Privacidad</li>
                <li>Términos y condiciones de uso</li>
                <li>Cláusula Informativa de Consentimiento</li>
            </ul>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background: ${v.GREY_100};
    padding: 75px 50px;
    color: ${v.INDIGO};

    .footer {
        &__logo {
            padding: 0 0 50px;
            transition: color 300ms ease;
            cursor: pointer;
        }

        &__logo:hover {
            background: ${v.PINK}
        }

        &__text {
            padding: 0 0 60px;
            line-height: 1.2;

        }

        &__list {
            margin-top: 75px;
           
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
`;

export default Footer;
