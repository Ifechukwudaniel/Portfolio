import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, className }) => {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      layout="intrinsic"
      width={"640"}
      height={"310"}
      src={url}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default Image
