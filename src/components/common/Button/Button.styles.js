import styled, { css } from 'styled-components'

const transitionAnimation = css`
  transition: background-color .15s ease-in;
  transition: color .15s ease-in;
`

export const ButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: ${transitionAnimation};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    padding: 0;
  }
`