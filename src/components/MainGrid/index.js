import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.625rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  max-width: 500px;

  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 10rem 1fr 19.5rem;
  }
`;

export default MainGrid;