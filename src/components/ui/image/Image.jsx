import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

const Image = ({ picture, alt, objectFit, svg, isBackground, ...props }) => {
  if (picture && !svg) {
    return isBackground ? (
      <BackgroundImage
        fixed={picture.fixed || undefined}
        fluid={picture.fluid || undefined}
        objectFit={objectFit}
        style={{ width: "100%", height: "100%" }}
        Tag="div"
        {...props}
      />
    ) : (
      <Img
        alt={alt}
        fixed={picture.fixed || undefined}
        fluid={picture.fluid || undefined}
        objectFit={objectFit}
        style={{ width: "100%", height: "100%" }}
        {...props}
      />
    )
  }

  if (svg && !picture) {
    return <img src={svg} alt={alt} {...props} />
  }

  return null
}

Image.defaultProps = {
  alt: "",
  objectFit: "cover",
  isBackground: false,
}

export default Image
