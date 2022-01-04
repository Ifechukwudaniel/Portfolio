import React, { Fragment, useState } from "react"
import { Sling as Hamburger } from "hamburger-react"
import { motion } from "framer-motion"
import HeaderContent from "./HeaderContent"

const Header = ({ darkHeader }) => {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, y: "0" },
    closed: { opacity: 1, y: "-120%" },
  }

  const headerVariants = {
    open: { background: "#000", border: "2px solid #B1B1B1" },
    closed: { background: "#F5F6F0", border: "3px solid #000" },
  }

  const titleVariantsDark = {
    open: { color: "#fff" },
    closed: { color: "#fff" },
  }
  const titleVariants = {
    open: { color: "#fff" },
    closed: { color: "#FFBE0A" },
  }

  const handleHamburger = () => {
    setIsOpen(!isOpen)
  }

  if (!darkHeader)
    return (
      <Fragment>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={headerVariants}
          className={`nav py-2 sticky top-0 z-40`}
        >
          <div className="flex flex-row mx-10">
            <div className="basis-3/4">
              <motion.a
                animate={isOpen ? "open" : "closed"}
                variants={darkHeader ? titleVariantsDark : titleVariants}
                href="#"
                className={`navTitle  text-5xl`}
              >
                ID
              </motion.a>
            </div>
            <div className="basis-1/4 flex justify-end">
              <button className=" px-3 py-1" id="navbar-toggle">
                <Hamburger
                  onToggle={handleHamburger}
                  color={isOpen ? "#fff" : darkHeader ? "#fff" : "#000"}
                  size={40}
                />
              </button>
            </div>
          </div>
        </motion.nav>
        <HeaderContent open={isOpen} />
      </Fragment>
    )
  else
    return (
      <Fragment>
        <motion.nav
          animate={isOpen ? "open" : "open"}
          variants={headerVariants}
          className={`nav py-2 sticky top-0 z-40`}
        >
          <div className=" flex flex-row mx-10">
            <div className="basis-3/4">
              <motion.a href="#" className={`navTitle text-5xl  text-white`}>
                ID
              </motion.a>
            </div>
            <div className="basis-1/4 flex justify-end">
              <button className=" px-3 py-1" id="navbar-toggle">
                <Hamburger
                  onToggle={handleHamburger}
                  color={isOpen ? "#fff" : darkHeader ? "#fff" : "#000"}
                  size={40}
                />
              </button>
            </div>
          </div>
        </motion.nav>
        <HeaderContent open={isOpen} />
      </Fragment>
    )
}

export default Header
