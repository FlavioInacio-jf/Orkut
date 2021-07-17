import Box from '../Box';
import AlurakutProfileSidebarMenuDefault from '../AlurakutMenuProfileSidebar';

export default function ProfileSidebar(props) {
  return  (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png `} style={ {borderRadius: '0.5rem'}} />

      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser} `}>
            @{props.githubUser}
        </a>
      </p>
      <p className="description">
        {props.description}
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}