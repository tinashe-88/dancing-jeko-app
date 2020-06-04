import React from 'react'
import styled from 'styled-components'

import { Section, Container } from '@components/global'

import InstagramIcon from '@static/icons/instagram.svg'
import TwitterIcon from '@static/icons/twitter.svg'

import ExternalLink from '@common/ExternalLink'
import Form from '@common/Form/Form'

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/ajay_ns',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/ajayns08',
  },
]

const Contact = () => (
  <Section id="contact" accent>
    <TitleContainer>
      <h2>Get In Touch</h2>
    </TitleContainer>
    <StyledContainer>
      <Grid>
        <FormContainer>
          <Form />
        </FormContainer>
      </Grid>
    </StyledContainer>
    <SocialIcons>
      {SOCIAL.map(({ icon, link }) => (
        <ExternalLink key={link} href={link}>
          <img src={icon} alt="link" />
        </ExternalLink>
      ))}
    </SocialIcons>
  </Section>
)

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin: 0 8px;
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`

const TitleContainer = styled.div`
  display: block;
  margin-bottom: 1.4rem;
  text-align: center;
`


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`

const FormContainer = styled.div`
  width: 500px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 430px;
  }
`

export default Contact