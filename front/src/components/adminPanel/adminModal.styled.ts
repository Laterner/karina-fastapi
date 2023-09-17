import styled from '@emotion/styled';

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background-color: #fff;
    width: auto;
    height: auto;
    min-width: 800px;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 50px;
    margin-top: auto;
`;

export const ModalTitle = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const ModalBody = styled.div`
    width: 50%;
    margin-right: auto;
`;
