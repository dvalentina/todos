import styled from 'styled-components';

import { Text as HelperText } from '../../helpers/Text';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 5px;
  padding-right: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CheckIcon = styled.svg`
  fill: none;
  stroke: #007a7e;
  stroke-width: 1px;
  position: absolute;
  height: 25px;
  width: 25px;
  transform: rotate(-10deg) translate(1px, 1px);
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  outline: none;
  cursor: pointer;

  &:checked {
    border-color: rgba(66, 148, 129, 0.5);
  }
`;

export const Text = styled(HelperText)`
  margin: 0;
  font-weight: 300;
  font-size: 25px;
  color: ${(props) => (props.checked ? '#dbdbdb' : 'black')};
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
