import styled from '@emotion/styled'

export const CartCardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.1);
  span {
    align-items: center;
    margin-left: auto;
    gap: 20px;
    display: flex;
  }
  a {
    position: relative;
    width: 10%;
    height: auto;
    img {
      position: relative;
      max-width: 100%;
      max-height: 100%;
    }
  }
`

export const CartCardBody = styled.div`
  display: grid;
  height: 70px;
  div {
    height: 40px;
  }
`

export const CartCardCount = styled.div`
  display: flex;
  justify-content: space-between;
  .counter-container {
    display: flex;
    margin-left: 0;
    min-width: 110px;
    max-width: 425px;
    height: 40px;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    .ant-input-number {
      width: 50px;
    }
    .ant-input-number-input-wrap {
      display: flex;
      align-items: center;
      .ant-input-number-input {
        display: flex;
        text-align: center;
        padding: 0;
      }
    }
  }
`
