import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"
import useIsMobile from "../../lib/isMobile"

const BlogPageImage = ({ image, className }) => {
  const { url, alternativeText, width } = image
  const mobile = useIsMobile()

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <NextImage
      loader={loader}
      width={mobile ? "400" : "1000"}
      height={mobile ? "200" : "600"}
      src={url}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default BlogPageImage
