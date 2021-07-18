import { useState, useEffect } from 'react';
import Head from 'next/head';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';
import AlurakutMenu from '../src/components/AlurakutMenu';
import OrkutNostalgicIconSet from '../src/components/OrkutNostalgicIconSet';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';
import ProfileSidebar from '../src/components/ProfileSidebar';


export default function Home() {

  const [ comunidades, setComunidades ] = useState([]);
  const [user, setUser] = useState([]);

  function handleCriarComunidade(event) {
    event.preventDefault();

    const dadosForm = new FormData(event.target)

    const comunidade = {
      title: dadosForm.get('title'),
      imageUrl: dadosForm.get('image'),
      creatorSlug: user.login,
    }

    fetch('/api/comunidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comunidade)
    })
    .then(async (response) => {
      const dados = await response.json();

      const comunidade = dados.registroCriado;
      setComunidades([...comunidades, comunidade])
    })
  }

  useEffect(() =>{
    //GET
    fetch('https://api.github.com/users/FlavioInacio-jf')
    .then( async (response) => {
      const dados = await response.json();
      setUser(dados);
    })

    //API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization' : 'd23bb93153110d632608812f3eba25',
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
      },
      body: JSON.stringify({"query": `query {
        allComunidades {
          title
          id
          imageUrl
          creatorSlug
        }
      }` }),
    })
    .then( async (response) => {
      const dados = await response.json()
      const comunidadesVindasDoDato = dados.data.allComunidades;
      setComunidades(comunidadesVindasDoDato)
    })
  }, [])

  return (
    <>
      <Head >
        <title>hubork | Seu Github de uma forma diferente</title>
      </Head>
      
      <AlurakutMenu githubUser={user.login}/>
      <MainGrid>
        <div  className="profileArea" style= {{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser= {user.login} description={user.bio} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="title">Bem-vindo(a), {user.name}</h1>
            <OrkutNostalgicIconSet user={user} />
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

          <ProfileRelationsBox title="Comunidades" items={comunidades} />

          {/*<ProfileRelationsBox items={pessoasFavoritas} title="Pessoas da comunidade" />*/}
        </div>

      </MainGrid>
    </>
  );
}
