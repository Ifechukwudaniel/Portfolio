import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

const BlogAuthorImage = ({ image, className }) => {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      width={"64"}
      height={"60"}
      src={url}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default BlogAuthorImage
