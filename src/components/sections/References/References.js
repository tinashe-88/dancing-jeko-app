import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

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
];

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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`

const Subtitle = styled.p`
  margin: 20px 0;
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`

const Comment = styled.blockquote`
  font-size: 12pt;
  color: ${props => props.theme.color.black.light};
`

export default References