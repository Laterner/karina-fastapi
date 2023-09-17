import styled from '@emotion/styled';

export const CartCardsContainer = styled.div`
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  cursor: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  a {
    margin-top: 10px;
  }
`
