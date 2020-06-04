import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'

import {
  Grid,
  Art,
} from './Philosophy.styles'

const Philosophy = () => (
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
        alicia: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "alicia" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gabi: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "gabi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        morgan_amadi: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "morgan-and-amadi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rain: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "rain" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="philosophy">
        <Container>
          <Grid>
            <div>
              <h2>Teaching Philosophy</h2>
              <p>
                Bringing together students as witnesses to and participants in 
                the profound and rich performance traditions of Africa has the 
                potential to move, transform, and inspire curiosity about a 
                world outside of their own. 
                <br/>
                <br/>
                As an African immigrant artist, I 
                embrace and represent the aesthetic and practices of African 
                dance while embracing its vibrant evolution. As a teacher, I 
                am tasked to represent and teach African dance to a diverse 
                population of students. I am anchored in the roots of my 
                people while embracing the cultures of my students. African 
                artists, who have become contenders in the contemporary arts 
                world, inspire me to continue to find individual 
                interpretations of embodied cultural expressions.
              </p>
              <br/>
              <br/>
              <p>
                By teaching in a variety of contexts—such as primary and 
                secondary schools, universities, as well as in community and 
                conference workshops — I work with diverse population to 
                develop cultural awareness and understanding through dance. 
                African dance offers an arena to highlight the power of 
                community building through arts education. 
              </p>
            </div>
            <Art>
              <Img fluid={data.gabi.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.alicia.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                As I introduce students to African culture through dance, I 
                like to juxtapose commonalities and differences by using a 
                movement language that has far-reaching effects on many 
                contemporary American dance styles in the hopes of breaking 
                through socio-cultural boundaries. 
                <br/>
                <br/>
                I love to use examples from 
                the students’ everyday movement to help them make these 
                connections. Because African dance enacts many types of daily 
                activities, I am able to demonstrate what I want students to be 
                able to articulate by creating analogies with quotidian 
                movement with which they are familiar.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                As I introduce students to African culture through dance, I 
                like to juxtapose commonalities and differences by using a 
                movement language that has far-reaching effects on many 
                contemporary American dance styles in the hopes of breaking 
                through socio-cultural boundaries. I love to use examples 
                from the students’ everyday movement to help them make these 
                connections. 
                <br/>
                <br/>
                Because African dance enacts many types of daily activities, 
                I am able to demonstrate what I want students to be able to 
                articulate by creating analogies with quotidian movement with 
                which they are familiar.
              </p>
            </div>
            <Art>
              <Img fluid={data.morgan_amadi.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.rain.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                I love to watch my students deepen their self-awareness and 
                develop body confidence because I enjoy being witness to 
                what is often profound transformation.  I am moved to lead 
                by example and to inspire and ignite their passion to dance. 
                <br />
                <br />
                Dancing in classes and workshops helps students practice 
                mindfulness with respect to all members of their community 
                while actively engaging in one’s own health and wellbeing. 
                By exercising these objectives of increasing cultural 
                awareness as well as self-awareness, community building, and 
                self-transformation, students are practicing accessing global 
                citizenship.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

export default Philosophy