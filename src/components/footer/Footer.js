import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/footer-logo.png'
import separator from '../../assets/img/footer-separator.png'

const Footer = () => {
    return (
        <FooterContainer>
            <img src={logo} ></img>
            <p>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.
            Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
            <img src={separator} ></img>
            <ul>
                <li>Política de Cookies</li>
                <li>Política de Privacidad</li>
                <li>Términos y condiciones de uso</li>
                <li>Cláusula Informativa de Consentimiento</li>
            </ul>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background: grey;
`;

export default Footer;
