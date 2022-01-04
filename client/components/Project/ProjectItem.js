import React from "react"
import Image from "next/image"

export default function ProjectItem() {
  return (
    <div className=" flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse  p-4 mt-7  border border-dark">
      <div className="xl:basis-8/12 lg:basic-2/3  md:basis-2/3">
        <h1 className="navTitle  text-4xl text-link-yellow">Crown clothing</h1>
        <p className="Poppins-Medium text-left  text-lg pt-10 pr-20">
          A full fledge ecommerce website built with react, firebase, redux with
          redux-sagas to handle asynchronous actions. It is also progressive web
          app. It is built following proven best practices with redux and redux
          sagas so can scale well
        </p>
        <div className="flex flex-row mt-10">
          <a className="py-2 px-4 bg-white drop-shadow-md  hover:drop-shadow-2xl text-dark border border-dark itim">
            See Live
          </a>
          <a className="py-2 px-4 bg-white drop-shadow-md hover:drop-shadow-2xl text-dark border border-dark itim ml-20">
            Source Code
          </a>
        </div>
      </div>
      <div className="xl:basis-4/12 lg:basic-1/3  md:basis-1/3">
        <div className="">
          <Image src="/images/png/crowncl.png" width="300" height="200" />
        </div>
      </div>
    </div>
  )
}
