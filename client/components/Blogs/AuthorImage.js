import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

const AuthorImage = ({ image, className }) => {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      width={"40"}
      height={"40"}
      src={url}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default AuthorImage
