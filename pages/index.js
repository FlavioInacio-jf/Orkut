import { useState, useEffect } from 'react';
import { BsPencilSquare, BsPencil } from 'react-icons/bs';
import Head from 'next/head';

import nookies from 'nookies';
import jwt from 'jsonwebtoken'

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';
import AlurakutMenu from '../src/components/AlurakutMenu';
import OrkutNostalgicIconSet from '../src/components/OrkutNostalgicIconSet';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';
import ProfileSidebar from '../src/components/ProfileSidebar';


export default function Home(props) {

  const [ comunidades, setComunidades ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ userFriends, setUserFriends ] = useState([]);
  const [ userFollowing , setFollowing ] = useState([]);

  const [isEditorOpen, setEditorState ] = useState(false);

  const [fraseDay, setFraseDay] = useState([]);

  function handleCriarComunidade(event) {
    event.preventDefault();

    const dadosForm = new FormData(event.target)

    const comunidade = {
      login: dadosForm.get('title'),
      avatarUrl: dadosForm.get('image'),
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

  function abrirEditor () {
    setEditorState(!isEditorOpen);
  }

  function handleALterarFrase(event) {
    event.preventDefault();

    const dadosForm = new FormData(event.target);

    const data = new Date;
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    const dataFull = `${dia}/${mes}/${ano} - ${hora}: ${minuto}`;

    const frase = {
      fraseday : dadosForm.get('frase'),
      data: dataFull,
      creatorname: props.githubUser,
      imageurl: `https://github.com/${props.githubUser}.png`,
    }
    console.log(props.githubUser.avatar_url)

    fetch('/api/frase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(frase)
    })
    .then(async (response) => {
      const dados = await response.json();

      const frase = dados.registroCriado;
      setFraseDay([...fraseDay, frase]);
      setEditorState(false);
    })

  }

  useEffect(() =>{
    //GET user
    fetch(`https://api.github.com/users/${props.githubUser}`)
    .then( async (response) => {
      const dados = await response.json();
      setUser(dados);
    })

    //GET - followers
    fetch(`https://api.github.com/users/${props.githubUser}/followers`)
    .then( async (response) => {
      const dados = await response.json();
      setUserFriends(dados);
    })

    //GET - following
    fetch(`https://api.github.com/users/${props.githubUser}/following`)
    .then( async (response) => {
      const dados = await response.json();
      setFollowing(dados);
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
          login
          id
          avatarUrl
        }
        allFrases {
          fraseday
          data
          creatorname
          imageurl
        }
      }` }),
    })
    .then( async (response) => {
      const dados = await response.json()

      const comunidadesVindasDoDato = dados.data.allComunidades;
      const frasesVindasDoDato = dados.data.allFrases;

      setFraseDay(frasesVindasDoDato);
      setComunidades(comunidadesVindasDoDato);
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
            <h1 className="title">Bem-vindo(a), {user.name}!!</h1>
            <div className="frase-dia">

              {isEditorOpen ?
                <form className="form-frase" onSubmit={handleALterarFrase}>
                  <input type="text" placeholder="Digite a nova frase" aria-label="Digite a nova frase" name="frase" />

                  <div>
                    <button type="submit">Alterar</button>
                    <button type="button" onClick={() => setEditorState(false)}>Cancelar</button>
                  </div>

                </form>
                :
                <>
                  <p>
                    <span>Sorte de hoje: </span>
                    {fraseDay.map(( itemAtual, index) => {
                      return (
                        index === fraseDay.length - 1 && (
                          <p> {itemAtual.fraseday}</p>
                        )
                      )
                    })}
                  </p>
                  <button type="button" onClick={abrirEditor}>
                    <BsPencil />
                  </button>
                </>
              }
            </div>

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
                <BsPencilSquare />
                Criar comunidade
              </button>
            </form>
          </Box>

          <Box>
            <h2 className="subTitle">Historico de frases de sorte</h2>
            <ul className="frases-list">
              {fraseDay.map(( itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <header>
                    <img src={itemAtual.imageurl} />
                  </header>
                  <main className="frase">
                    <p>
                      {itemAtual.fraseday}
                    </p>
                    <div>
                      <span className="name">{itemAtual.creatorname}</span>
                      <span className="data">{itemAtual.data}</span>
                    </div>
                  </main>
                </li>
              )
              })}
            </ul>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>

          <ProfileRelationsBox  title="Meus seguidores" items={userFriends} type={false} />

          <ProfileRelationsBox title="Comunidades" items={comunidades} type={true} />

          <ProfileRelationsBox items={userFollowing} title="Pessoas da favoritas" />
        </div>

      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {

  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token,
    }
  }).then( (response) => response.json())

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  const { githubUser } = jwt.decode(token);

  return {
    props: {
      githubUser,
    },
  }
}