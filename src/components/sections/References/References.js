import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

import {
  TeamGrid,
  Art,
  ArtMobile,
  Title,
  Subtitle,
  Comment
} from './References.styles'

const TEAM = [
  {
    name: 'Amanda Hamp',
    image: 'amanda.jpg',
    role: 'Assistant Professor of Dance History and Criticism, Contemporary Dance',
  },
  {
    name: 'Donna Jewel',
    image: 'donna.jpg',
    role: 'Department Chair Professor of Dance Contemporary Dance, Head of Dance',
  },
  {
    name: 'Tendai Muparuta',
    image: 'tendai.jpg',
    role: 'Artist in Residence in African Music Performance, Lecturer in Music, Director of Zambezi, Co-Director of Kusika',
  },
]

const References = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="references" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h2>References</h2>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => (node.relativePath) === image
              ).node

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                  <Comment>
                    <i>
                      Neque porro quisquam est qui 
                      dolorem ipsum quia dolor sit amet, consectetur, 
                      adipisci velit...
                    </i>
                  </Comment>
                </div>
              )
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
)

export default References