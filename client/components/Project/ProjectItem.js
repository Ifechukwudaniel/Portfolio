import React from "react"
import Image from "next/image"
import { getStrapiMedia } from "../../lib/media"

export default function ProjectItem({
  title,
  description,
  isOpenSource,
  image,
}) {
  const { url, alternativeText, width } = image

  const loader = () => {
    return `${getStrapiMedia(image)}?w=${width}`
  }

  return (
    <div className=" flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse  p-4 mt-7  border border-dark">
      <div className="xl:basis-6/12 lg:basic-6/12  md:basis-2/3">
        <h1 className="xl:text-left  lg:text-left md:text-left sm:text-center navTitle  text-4xl text-link-yellow">
          {title}
        </h1>
        <p className="xl:w-10/12 lg:w-10/12 Poppins-Medium xl:text-left  lg:text-left md:text-left sm:text-center text-lg pt-10 ">
          {description}
        </p>
        <div className="flex flex-row mt-10 ">
          <div className="py-2 px-4 bg-white drop-shadow-md  hover:drop-shadow-2xl text-dark border border-dark itim">
            See Live
          </div>
          <div className="py-2 px-4 bg-white drop-shadow-md hover:drop-shadow-2xl text-dark border border-dark itim">
            Source Code
          </div>
        </div>
      </div>
      <div className="xl:basis-6/12 lg:basic-6/12  md:basis-1/3">
        <div className=" ml-10 ">
          <Image loader={loader} src={url} width="580" height="300" />
        </div>
      </div>
    </div>
  )
}
