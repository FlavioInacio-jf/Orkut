import styled from 'styled-components';
import React from 'react';

import { BsBookHalf, BsCamera, BsCameraVideoFill, BsFillStarFill, BsFillEnvelopeFill, BsFillHeartFill , BsFillSquareFill, BsPersonFill} from 'react-icons/bs';

export default function OrkutNostalgicIconSet(props) {
  return (
    <>
      <OrkutNostalgicIconSet.List>
        {[
          { name: 'Recados', slug: 'recados', icon: <BsBookHalf /> },
          { name: 'Fotos', slug: 'fotos', icon: <BsCamera /> },
          { name: 'Videos', slug: 'videos', icon: <BsCameraVideoFill /> },
          { name: 'Fãs', slug: 'fas', icon: <BsFillStarFill /> },
          { name: 'Mensagens', slug: 'mensagens', icon: <BsFillEnvelopeFill /> },
        ].map(({ name, slug, icon }) => (
          <li key={`orkut__icon_set__${slug}`}>
            <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
              {name}
            </span>
            <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
              {icon}
              <span>
                {props[slug] ? props[slug] : 0}
              </span>

            </span>
          </li>
        ))}
        {[
          { name: 'Confiável', slug: 'confiavel', icon: <BsPersonFill />, color: 'color-red' },
          { name: 'Legal', slug: 'legal', icon: <BsFillSquareFill />, color:  'color-blue'},
          { name: 'Sexy', slug: 'sexy', icon: <BsFillHeartFill />, color: 'color-yellow' },
        ].map(({ name, slug, icon, color }) => {
          const total = props[slug] ? props[slug] : 1;
          return (
            <li key={`orkut__icon_set__${slug}`}>
              <span className="OrkutNostalgicIconSet__title">
                {name}
              </span>
              <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" className={color} className="grid" style={{ gridArea: 'number' }}>
                {[0, 1, 2].map((_, index) => {
                  const isHeartActive = index <= (total - 1);
                  return icon
                })}
              </span>
            </li>
          );
        })}

      </OrkutNostalgicIconSet.List>
    </>
  )
}
OrkutNostalgicIconSet.List = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    font-size: 12px;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number";

    &:not(:last-child) {
      margin-right: 5px;
    }
    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic;
    }
    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.25rem;

      font-size: 1rem;
      margin-top: 0.1875rem;

      .OrkutNostalgicIconSet__iconSample {
        margin-right: 7px;
      }
      span {
        color: #2E7BB4;
        font-size: 0.875rem;
        font-style: italic;
      }
    }

    .grid {
      display: flex;
      gap: 0.2368rem;
    }

    .color-red {
      color: #FE929F;
    }

    .color-blue {
      color: #5AAAE7;
    }
    .color-yellow {
      color: #FFD54F;
    }
  }
`;

