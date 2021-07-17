import styled from 'styled-components';

import { BsFillPersonFill, BsBookHalf, BsCamera, BsFillBrightnessHighFill, BsPlus, BsBoxArrowLeft } from 'react-icons/bs';

export default function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <BsFillPersonFill className="icon" />
            Perfil
        </a>
        <a href="/">
          <BsBookHalf className="icon"/>
            Recados
        </a>
        <a href="/">
          <BsCamera className="icon" />
            Fotos
        </a>
        <a href="/">
          <BsFillBrightnessHighFill className="icon" />
            Depoimentos
        </a>
      </nav>

      <hr />
      <nav>
        <a href="/">
          <BsPlus className="icon" />
          GitHub Trends
        </a>
        <a href="/logout">
          <BsBoxArrowLeft className="icon" />
          Sair
        </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}
AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 0.75rem;
    color: #2E7BB4;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start;

    text-decoration: none;

    .icon {
      font-size: 1rem;
    }
  }
`;