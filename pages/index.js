import { useState, useEffect } from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';

import AlurakutMenu from '../src/components/AlurakutMenu';
import OrkutNostalgicIconSet from '../src/components/OrkutNostalgicIconSet';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ProfileSidebar from '../src/components/ProfileSidebar';
import Link from '../src/components/Link';


function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} <span>({props.items.length})</span>
      </h2>

      <ul>
        {props.items.map((itemAtual, index) => {
          return (
             index <= 5 && (
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
          )
        })}
      </ul>
      <hr />
      {props.items.length >=5 && (
        <Link href="/" className="boxLink">Ver todos</Link>
      )}
    </ProfileRelationsBoxWrapper>
  );
}


export default function Home() {

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

  const [user, setUser] = useState([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/FlavioInacio-jf')
    .then((r) => {
      return r.json();
    })
    .then((response) => {
      setUser(response);
    });
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={user.login}/>
      <MainGrid>
        <div  className="profileArea" style= {{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser= {user.login} description={user.bio} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="title">Bem-vindo(a), {user.name}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
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

          {/*<ProfileRelationsBox items={pessoasFavoritas} title="Seguidores" />*/}

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


          {/*<ProfileRelationsBox items={pessoasFavoritas} title="Pessoas da comunidade" />*/}
        </div>

      </MainGrid>
    </>
  );
}
