import React, { Fragment, useState } from "react"
import { Sling as Hamburger } from "hamburger-react"
import HeaderLink from "./HeaderLink"
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, y: "0" },
    closed: { opacity: 1, y: "-120%" },
  }

  const headerVariants = {
    open: { background: "#000" },
    closed: { background: "#F5F6F0" },
  }

  const titleVariants = {
    open: { color: "#fff" },
    closed: { color: "#FFBE0A" },
  }

  const handleHamburger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={headerVariants}
        className="nav py-2 sticky top-0 z-40"
      >
        <div className=" flex flex-row mx-10">
          <div className="basis-1/2">
            <motion.a
              animate={isOpen ? "open" : "closed"}
              variants={titleVariants}
              href="#"
              className="navTitle text-5xl"
            >
              Ifechukwu Daniel
            </motion.a>
          </div>
          <div className="basis-1/2 flex justify-end">
            <button className=" px-3 py-1" id="navbar-toggle">
              <Hamburger
                onToggle={handleHamburger}
                color={isOpen ? "#fff" : "#000"}
                size={40}
              />
            </button>
          </div>
        </div>
      </motion.nav>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="menu flex flex-row bg-dark"
      >
        <div className="basic-1/2 menu-half"></div>
        <div className="basic-1/2 bg-dark-light menu-half flex flex-col">
          <HeaderLink href={"/"} text={"Home"} />
          <HeaderLink href={"/projects"} text={"Projects"} />
          <HeaderLink href={"/cv"} text={"CV"} />
          <HeaderLink href={"/about"} text={"About"} />
          <HeaderLink href={"/contact"} text={"Contact"} />
          <HeaderLink href={"/blog"} text={"Blog"} />
        </div>
      </motion.div>
    </Fragment>
  )
}

export default Header
