import React from 'react'

import styled, { css } from 'styled-components'

import Button from '../Button/Button'

const Form = () => (
  <FormStyles action="#" method="post">
    <FormDetails>
     <DetailItems>
       <LabelStyles htmlFor="name">Name:</LabelStyles>
       <Styles 
        type="text" 
        id="name" 
        name="name"
        required
      />
     </DetailItems>
     <DetailItems>
       <LabelStyles htmlFor="mail">E-mail:</LabelStyles>
       <Styles 
        type="email" 
        id="mail" 
        name="email"
        required
      />
     </DetailItems>
     <DetailItems>
       <LabelStyles htmlFor="msg">Message:</LabelStyles>
       <TextArea 
        type="text"
        id="message"
        name="message"
       />
     </DetailItems>
     <ButtonContainer>
       <Button>
         Send
       </Button>
     </ButtonContainer>
    </FormDetails>
  </FormStyles>
)

const InputStyles = css`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  transition: all 0.3s ease 0s;

  &:focus {
    border-color: ${props => props.theme.color.black.lighter};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FormStyles = styled.form`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  margin: 0 0 1.45rem;
`

const FormDetails = styled.ul`
  padding: 0;
  width: 100%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 410px;
  }

  @media (max-width: ${props => props.theme.screen.xxs}) {
    width: 300px;
  }
`

const DetailItems = styled.li`
  position: relative;
  margin-bottom: 1rem;
`

const LabelStyles = styled.label`
  color: ${props => props.theme.color.black.light};
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 0;
  }
`

const Styles = styled.input`
  ${InputStyles};
`


const TextArea = styled.textarea`
  ${InputStyles};
  height: 200px;
  overflow: auto;
`

export default Form