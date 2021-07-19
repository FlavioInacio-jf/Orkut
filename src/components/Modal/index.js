import styled from 'styled-components';

export function Modal() {
  return (
    <ModalContent >
      <div className="modal">
        <div className="iconDelete">

        </div>
        <h3>Excluir pergunta</h3>
        <span>Tem certeza que você deseja excluir esta pergunta?</span>
        <footer>
          <Button type="button">
            Cancelar
          </Button>

          <Button type="button" >
            Sim, excluir
          </Button>
        </footer>
      </div>

    </ ModalContent>
  );
}

const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: rgba(5, 2, 6, 0.8);


  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 60px 110px;
    max-width: 590px;
    border-radius: 8px;
    background: #F8F8F8;
    opacity: 1;


    .iconDelete {
      padding-bottom: 25px;
    }
    .iconDelete  svg  {
      width: 3rem;
      height: 3rem;
      stroke: #E73F5D;
    }

    .iconDelete  svg path  {
      stroke: #E73F5D;
    }

    h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #29292E;
      line-height: 34px;
    }

    span {
      line-height: 26px;
      color: #4D5E77;
    }

    footer {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 8px;

      padding-top: 40px;

      button {
        &:first-child {
          background: #DBDCDD;
          color: #737380;
        }

        &:last-child {
          background: #E73F5D;
        }
      }
    }
  }
`;