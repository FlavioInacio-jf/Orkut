import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export default function ProfileRelationsBox(props) {
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