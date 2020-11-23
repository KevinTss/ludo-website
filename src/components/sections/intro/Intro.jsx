import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { IntroContainer, Blockquote, ImageContainer } from "./style"
import { Container } from "../../../styles"
import { Image } from "../../ui"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "ludo-1.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("data", data)
  // https://dribbble.com/shots/4602373-Hero-scroll-Interaction
  // https://www.biocreationbois.com/blog/category/artisanat-art/

  return (
    <IntroContainer>
      <Container>
        <Blockquote cite="https://simonsinek.com/">
          The goal is not to do business with everybody who needs what you have.
          <br />
          The goal is to do business with people who believe what you believe.
          <ImageContainer>
            <Image picture={data.backgroundImage} />
          </ImageContainer>
        </Blockquote>
      </Container>
    </IntroContainer>
  )
}

export default Intro
