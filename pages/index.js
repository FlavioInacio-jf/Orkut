import { useState, useEffect } from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';

import AlurakutMenu from '../src/components/AlurakutMenu';
import OrkutNostalgicIconSet from '../src/components/OrkutNostalgicIconSet';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutProfileSidebarMenuDefault } from '../src/components/AlurakutMenuProfileSidebar';


function ProfileSidebar(props) {
  return  (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png `} style={ {borderRadius: '0.5rem'}} />

      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser} `}>
            @{props.githubUser}
          </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} <span>({props.items.length})</span>
      </h2>

      <ul>
        {props.items.map((itemAtual) => {
          return (
            <li  key={ itemAtual.id }>
              <a href={itemAtual.html_url}>
                <img
                  src={ itemAtual.avatar_url }
                  alt={ itemAtual.login }
                />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}


export default function Home() {
  const githubUser = 'FlavioInacio-jf';

  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev'];

  const [ comunidades, setComunidades ] = useState([{
    id: '0102578555555555555555555555555',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  function handleCriarComunidade(event) {
    event.preventDefault();

    const dadosForm = new FormData(event.target)

    const comunidade = {
      id: new Date().toISOString(),
      title: dadosForm.get('title'),
      image: dadosForm.get('image'),
    }
    setComunidades([...comunidades, comunidade])
  }

  const [seguidores, setSeguidores] = useState([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/FlavioInacio-jf/followers')
    .then((r) => {
      return r.json();
    })
    .then((response) => {
      setSeguidores(response);
    });
  }, [])
  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div  className="profileArea" style= {{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser= {githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="title">Bem vindo (a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subtitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCriarComunidade}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da comunidade?"
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da comunidade?"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>

          <ProfileRelationsBox items={seguidores} title="Seguidores" />

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades <span>({comunidades.length})</span>
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li  key={ itemAtual.id }>
                    <a href={`/user/${itemAtual.title}`}>
                      <img
                        src={ itemAtual.image }
                        alt={ itemAtual.title }
                      />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade <span>({pessoasFavoritas.length})</span>
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li  key={pessoa}>
                    <a href={`/user/${pessoa}`}>
                      <img src={`https://github.com/${pessoa}.png`} alt={ {pessoa} } />
                      <span>{pessoa}</span>
                    </a>
                  </li>

                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  );
}
