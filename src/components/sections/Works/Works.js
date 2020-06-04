import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section } from '@components/global'
import ExternalLink from '@common/ExternalLink'

import {
  WorksGrid,
  StyledContainer,
  Art,
} from './Works.styles'

const WORKS = [
  {
    title: 'works1',
    link: 'https://vimeo.com/320277360',
  },
  {
    title: 'works2',
    link: 'https://vimeo.com/316909488/13b0542fcc',
  },
  {
    title: 'works3',
    link: 'https://vimeo.com/3203770177',
  },
  {
    title: 'works4',
    link: 'https://www.youtube.com/watch?v=aSnOXrF_doE',
  },
];

const Works = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h2>Check out my works</h2>
            <WorksGrid>
              {WORKS.map(({ title, link }) => (
                <ExternalLink 
                  key={link} 
                  href={link}
                >
                  {title} &nbsp;&#x21e2;
                </ExternalLink>
              ))}
            </WorksGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
)

export default Works
