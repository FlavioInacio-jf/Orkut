import styled from 'styled-components';
import React from 'react';

import { BsPeopleFill, BsFillHeartFill, BsFillInboxesFill, BsBookHalf, BsFillBriefcaseFill, BsGeoAlt } from 'react-icons/bs';

export default function OrkutNostalgicIconSet(props) {
  return (
    <>
      <OrkutNostalgicIconSet.List>
        {[
          { name: 'Followers', slug: 'followers', icon: <BsPeopleFill /> },
          { name: 'Following', slug: 'following', icon: <BsFillHeartFill /> },
          { name: 'Repositories', slug: 'repositories', icon: <BsFillInboxesFill /> },
          { name: 'Blog', slug: 'blog', icon: <BsBookHalf /> },
          { name: 'Company', slug: 'company', icon: <BsFillBriefcaseFill /> },
          { name: 'Location', slug: 'location', icon: <BsGeoAlt /> },
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
    font-size: 0.75rem;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number";

    &:not(:last-child) {
      margin-right: 0.3125rem;
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
        margin-right: 0.4375rem;
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

