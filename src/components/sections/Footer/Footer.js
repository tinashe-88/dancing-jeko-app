import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ExternalLink from '@common/ExternalLink'

import {
  FooterWrapper,
  Copyright,
  Art,
  StyledContainer
} from './Footer.styles'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>rujeko.com</h2>
              <br/>
              <span>
                Copyright ©{new Date().getFullYear()}.
                {` `}
                All rights reserved.
                {` `}
                <br/>
                Illustrations by
                <ExternalLink 
                  href="https://twitter.com/hopefully_sekai"
                >
                {` `}@hopefully_sekai
                </ExternalLink>
                <br/>
                Created by
                <ExternalLink 
                  href="https://twitter.com/@tinashe88"
                >
                {` `}@tinashe88
                </ExternalLink>
              </span>
            </Copyright>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
)

export default Footer