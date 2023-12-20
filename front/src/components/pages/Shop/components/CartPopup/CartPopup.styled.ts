import styled from '@emotion/styled'

export const CartPopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: auto;
  height: 50px;
  gap: 10px;
  top: 10%;
  left: 50%;
  padding: 10px 15px;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid #ccc;
  z-index: 9999;
  animation: fade-in-out 5s;
  p {
    margin-bottom: 3px;
  }
  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
