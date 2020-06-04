import React from 'react'

import { Section } from '@components/global'

import InstagramIcon from '@static/icons/instagram.svg'
import TwitterIcon from '@static/icons/twitter.svg'

import ExternalLink from '@common/ExternalLink'
import Form from '@common/Form/Form'

import {
  SocialIcons,
  TitleContainer,
  StyledContainer,
  Grid,
  FormContainer
} from './Contact.styles'

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

export default Contact