import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      width={width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
