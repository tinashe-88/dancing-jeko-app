import styled from 'styled-components'

import { Container } from '@components/global'

export const SocialIcons = styled.div`
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

export const TitleContainer = styled.div`
  display: block;
  margin-bottom: 1.4rem;
  text-align: center;
`


export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`

export const FormContainer = styled.div`
  width: 500px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 430px;
  }
`