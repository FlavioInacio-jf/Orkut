import { ProfileRelationsBoxWrapper } from '../ProfileRelations';
import Link from '../Link';

export default function ProfileRelationsBox(props) {
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
                <a href={`/communities/${itemAtual.id}`}>
                  <img src={ itemAtual.imageUrl } alt={ itemAtual.title }/>
                  <span>{itemAtual.title}</span>
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