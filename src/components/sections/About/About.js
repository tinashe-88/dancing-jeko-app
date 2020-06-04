import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

import {
  Art,
  Grid,
  TitleContainer
} from './About.styles'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        rujeko_image: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "rujeko" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        rujeko_image_2: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "rujeko2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <TitleContainer>
          <h2>About</h2>
        </TitleContainer>
        <Container>
          <Grid>
            <div>
              <p>
                I have lived in the United States as an artist for more than 
                half of my life.  I am a product of two very different worlds 
                that arm me with tools to produce and affect African arts and 
                artists today. In my exploration of dance, I attempt to 
                integrate these worlds using my localized movement vocabulary 
                to explore broader themes of gender, power and nature.
              </p>
            </div>
            <Art>
              <Img fluid={data.rujeko_image.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Being an immigrant artist, my work is shaped in a way that 
                reflects my constant need to traverse a complex web of often 
                opposing sentiments and beliefs. Artistic cross-cultural 
                collaboration is necessary in shaping and fueling my own 
                creativity.  I enjoy the coming together of minds and the 
                blending of mutual ideas that often result in original, 
                innovative productions. These collaborations with institutions,
                communities and individuals from all over the world, 
                constantly place me at a meeting point of cultures. This gives 
                me the freedom to work with musicians, dancers, and writers 
                from many cultures and countries. African movement easily 
                translates into narratives that can speak to and be expressive 
                of multiple themes and motifs. 
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                As an African immigrant artist, I embrace and represent the 
                aesthetic and practices of African dance while embracing its 
                vibrant evolution.
                <br />
                <br />
                As an immigrant artist who has lived in United States dance, 
                I attempt to work collaboratively in an attempt to reflect 
                the contrast of my past and present experiences. I use the 
                sing a movement language of dance to tackle themes of 
                migration, gender and ritual practice.  
              </p>
            </div>
            <Art>
              <Img fluid={data.rujeko_image_2.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                I integrating disparate styles and cultures through community 
                driven collaborative practices is what I love the most about 
                being an artist. Work with a rich network of artists that I 
                have grown to know over the last two decades is the reward. 
                The process of having to communicate cross culturally considers
                another persons perspective and adding it to my own had 
                been an enriching process. 
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                My job often requires me to act as a bridge between cultures 
                that results in many experiences, which have added to my 
                navigating the challenges of cross-cultural collaboration.
                Being a part of innovative creative works, museums, Broadway, 
                universities and colleges, community and conferences workshops 
                all over the country positions to be part of rewriting and 
                reinvention of African cultural arts.  In these settings, I
                enjoy creating a meeting of cultures that centers on African 
                arts.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                African artists who are finding self-expression through the 
                cultural arts in western institutions inspire me, which leads 
                them to come contenders in all arenas of the contemporary art 
                world.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

export default About