import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props) {
  return  (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png `} style={ {borderRadius: '0.5rem'}} />
    </Box>
  );
}
export default function Home() {
  const githubUser = 'FlavioInacio-jf';

  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div  className="profileArea" style= {{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser= {githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="title">Bem vindo (a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li>
                    <a href={`/user/${pessoa}`} key={pessoa}>
                      <img src={`https://github.com/${pessoa}.png`} alt={ {pessoa} } />
                      <span>{pessoa}</span>
                    </a>
                  </li>

                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>

      </MainGrid>
    </>
  );
}
