import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 50px;
  padding-bottom: 115px;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

export const Title = styled.h1`
  color: #e9d9d8;
  font-size: 100px;
  font-weight: 100;
  margin: 0;
  line-height: 100%;
`;

export const NotFound = styled.div`
  font-weight: 300;
  font-size: 25px;
  color: #9b9b9b;
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 65px;
`;

export const ToDosContainer = styled.div``;

export const Signature = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #9b9b9b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  position: absolute;
  bottom: 28px;
`;
