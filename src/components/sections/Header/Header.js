import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from '@components/global'

import Button from '@common/Button/Button'

import {
  HeaderWrapper,
  Art,
  Grid,
  Text,
  StyledExternalLink
} from './Header.styles'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper id="home">
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                Prof.
                <br />
                Rujeko
                <br />
                Dumbutshena
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                  <Button>
                    Download resume &nbsp;&#x21e3;
                  </Button>
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

export default Header
