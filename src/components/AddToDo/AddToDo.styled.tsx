import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 67px;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 5px;
  padding-right: 20px;
  gap: 20px;
`;

export const Input = styled.input`
  font-size: 25px;
  width: -webkit-fill-available;
  border: none;

  &:focus,
  &:focus-visible {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-style: italic;
    color: #dbdbdb;
  }
`;

export const Icon = styled.div`
  margin-left: 7px;
  margin-top: 5px;
  svg {
    width: 27px;
    height: 27px;
    color: #dbdbdb;
  }
`;
