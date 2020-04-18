import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
    const data = useStaticQuery(graphql`
      query {
        profileImage: file(relativePath: { eq: "conor.svg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default Profile