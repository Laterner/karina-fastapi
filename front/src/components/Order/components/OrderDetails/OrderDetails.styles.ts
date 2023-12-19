import styled from '@emotion/styled'

export const OrderDetailsContainer = styled.div`
  .count-input {
    display: flex;
    align-items: center;
    justify-content: center !important;
    margin-top: -10px;
    min-width: 70px !important;
    height: 30px !important;
    .ant-input-number-input {
      color: rgba(0, 0, 0, 0.88);
    }
  }
  .card__image {
    width: 65px;
    img {
      width: 65px !important;
      max-width: 65px !important;
    }
  }
  .order-footer {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    p {
      margin: 0;
      b {
        margin-right: 5px;
      }
    }
  }
`
