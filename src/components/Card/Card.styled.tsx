import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px;
  min-height: 200px;
  width: 570px;
  position: relative;

  &::after {
    content: '';
    box-sizing: border-box;
    width: 562px;
    height: 5px;
    position: absolute;
    background: white;
    bottom: -5px;
    left: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px;
    z-index: -1;
  }

  &::before {
    content: '';
    box-sizing: border-box;
    width: 556px;
    height: 10px;
    position: absolute;
    background: white;
    bottom: -10px;
    left: 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px;
    z-index: -2;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  height: -webkit-fill-available;
  width: inherit;
  z-index: -3;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 15px 29px 0px, rgba(0, 0, 0, 0.07) 0px 3px 4px 3px;
`;
