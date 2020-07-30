import React from 'react';
import { FooterBase } from './styles';
import Logo from "../../assets/img/girlpower.png"

function Footer() {
  return (
    <FooterBase>
        <a href="./">
            <img className="Logo" src={Logo} alt="Logo Girl Power" />
        </a>
      <p>
        Orgulhosamente criado por Rafaela Saori durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
