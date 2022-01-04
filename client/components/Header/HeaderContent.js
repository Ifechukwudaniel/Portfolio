import React, { Fragment } from "react"
import HeaderLink from "./HeaderLink"
import { motion } from "framer-motion"
import Image from "next/image"

const HeaderContent = ({ open }) => {
  const variants = {
    open: { opacity: 1, y: "0" },
    closed: { opacity: 1, y: "-120%" },
  }

  return (
    <Fragment>
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        className="menu flex flex-row bg-dark"
      >
        <div className="xl:basis-7/12 lg:basis-1/2 md:basis-1/2 hidden-menu  pl-14">
          <div className="mt-24">
            <h1 className="text-white text-4xl arial-black">
              Ifechukwu Daniel
            </h1>
            <h1 className="text-link-yellow text-4xl arial-black">
              Software Engineer
            </h1>
          </div>
          <div className="mt-20">
            <h1 className="text-white text-4xl arial-black">
              dandyanmicx@gmail.com
            </h1>
            <h1 className="text-white text-4xl arial-black">+1 234-567-8901</h1>
          </div>
          <div className="mt-20">
            <h1 className="text-link-gray text-4xl arial-black">message me</h1>
          </div>
          <div className="flex  mt-10">
            <a
              href="https://www.linkedin.com/in/daniel-ifechukwu-b4b08a168/"
              className="ml-5"
            >
              <Image src="/images/png/linkedin.png" width="64" height="64" />
            </a>
            <a
              href="https://www.instagram.com/daniel.ifechukwu.547/"
              className="ml-5"
            >
              <Image src="/images/png/instagram.png" width="64" height="64" />
            </a>
            <a href="https://twitter.com/dandynamicx" className="ml-5">
              <Image src="/images/png/twitter.png" width="64" height="64" />
            </a>
            <a href="https://github.com/Ifechukwudaniel" className="ml-5">
              <Image src="/images/png/github.png" width="64" height="64" />
            </a>
            <a href="mailto: ifechukwu0@icloud.com" className="ml-5">
              <Image src="/images/png/mail.png" width="64" height="64" />
            </a>
          </div>
        </div>
        <div className="xl:basis-5/12 lg:basis-1/2 md:w-screen  sm:w-screen  bg-dark-light menu-half flex flex-col">
          <HeaderLink href={"/"} text={"Home"} />
          <HeaderLink href={"/projects"} text={"Projects"} />
          <HeaderLink href={"/cv"} text={"CV"} />
          <HeaderLink href={"/about"} text={"About"} />
          <HeaderLink href={"/blog"} text={"Blog"} />
        </div>
      </motion.div>
    </Fragment>
  )
}

export default HeaderContent
