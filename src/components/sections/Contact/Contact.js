import React from 'react'
import styled from 'styled-components'

import { Section, Container } from '@components/global'

import Form from '../../common/Form/Form'

const Contact = () => (
  <Section id="contact" accent>
    <StyledContainer>
      <div>
        <h2>Get In Touch</h2>
        <FormContainer>
          <Form />
        </FormContainer>
      </div>
      
    </StyledContainer>
  </Section>
)


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`

const FormContainer = styled.div`
  
`

export default Contact