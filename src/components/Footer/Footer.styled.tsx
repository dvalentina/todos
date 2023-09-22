import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  position: relative;
  border-top: 1px solid #dbdbdb;
`;

export const Counter = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #9b9b9b;
`;

export const CounterContainer = styled.div`
  position: absolute;
  left: 15px;
`;

export const ClearContainer = styled.div`
  position: absolute;
  right: 9px;
`;
