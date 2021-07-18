import React from 'react';
import Image from 'next/image'

import { BsBoxArrowInRight, BsAt } from 'react-icons/bs';
import brandImg from '../public/logo.svg';

export default function LoginScreen() {
  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <Image src={brandImg} layout={'intrinsic'}/>

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box">
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <div>
              <span  className="icon-input">
                <BsAt />
              </span>
              <input placeholder="Usuário"/>
            </div>

            <button type="submit">
              <BsBoxArrowInRight />
              Login
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
                </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 hubork.com.br - <a href="/">Sobre o Hubork.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a> - Desenvolvido por <a href="/">Flávio Inácio</a>
          </p>
        </footer>
      </div>
    </main>
  )
}