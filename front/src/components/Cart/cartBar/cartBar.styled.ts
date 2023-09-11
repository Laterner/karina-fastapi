import styled from '@emotion/styled';

export const CartBarContainer = styled.div`
    position: relative;
    h2,
    h4 {
        margin-bottom: 20px;
    }
`;

export const CartBarFooter = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    h2 {
        margin: 0;
    }
    //buy-button
    button {
        width: 200px;
        height: 50px;
    }
`;
