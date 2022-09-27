import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

const BlogImage = ({ image, className }) => {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      width={"280"}
      height={"200"}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default BlogImage
