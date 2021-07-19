import { useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

import {  useRouter } from 'next/router'
import Image from 'next/image'
import Link  from '../Link';

import nookies from 'nookies';

import AlurakutMenuProfileSidebar  from '../AlurakutMenuProfileSidebar';
import brandImg from '../../../public/logo.svg';

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';

export default function AlurakutMenu({ githubUser }) {
  const router = useRouter();
  const [isMenuOpen, setMenuState] = useState(false);

  function exit (event) {
    event.preventDefault();
    nookies.destroy(null, 'USER_TOKEN')
    router.push('/login', {})
  }

  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <Image src={ brandImg } className="logo" layout="intrinsic" />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={''} onClick={exit}>
            Sair
          </a>
          <div className="search">
            <input placeholder="Pesquisar no Orkut" />
            <button className="search" type="submit">
              <BsSearch />
            </button>
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>
      </div>


      <AlurakutMenuProfileSidebar githubUser={githubUser} />


    </AlurakutMenu.Wrapper>


  )
}

AlurakutMenu.Wrapper = styled.header`
  width: 100%;
  background-color: #308BC5;

  .alurakutMenuProfileSidebar {
    background: white;
    position: fixed;
    z-index: 100;
    padding: 2.875rem;
    bottom: 0;
    left: 0;
    right: 0;
    top: 3rem;
    transition: .3s;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 3rem))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
    }
    a {
      font-size: 1.125rem;
    }
    .boxLink {
      font-size: 1.125rem;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }

    hr {
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
      border-color: transparent;
      border-bottom-color: #ECF2FA;
    }
  }

  .logo {
    background-color: #ffffff;
    padding: 0.5625rem 0.875rem;
    border-radius: 0.625rem;
    height: 2.125rem;
  }

  .container {
    background-color: #308BC5;
    padding: 0.4375rem 1rem;
    max-width: 1110px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media(min-width: 860px) {
      justify-content: flex-start;
    }

    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media(min-width: 860px) {
        display: none;
      }
    }

    nav {
      display: none;
      @media(min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 0.75rem;
        color: white;
        padding: 0.625rem 1rem;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: #5292C1;
          display: block;
          position: absolute;
          width: 0.0625rem;
          height: 0.75rem;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }

      .search {
        display: flex;
        align-items: center;
        border-radius: 0.3125rem;

      }
      button {
        border-radius: 0 0.3125rem 0.3125rem 0 !important;
        background-color: #2F4A71 !important;
        color: #FFFFFF;
        font-size: 1rem;
        display: inline-block;
        padding: 0.625rem;
        height: 100%;
      }
    }


    input {
      color: #333333;
      padding: 0.75rem 0.625rem;
      border: 0;
      border-radius: 0.3125rem 0 0 0.3125rem;
      font-size: 0.75rem;
      ::placeholder {
        color: #333333;
        opacity: 1;
      }
    }
  }

`;
