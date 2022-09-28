import { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { Document, Page } from "react-pdf"
import { getStrapiMedia } from "../lib/media"
import useIsMobile from "../lib/isMobile"

const CV = ({ homepage }) => {
  let mobile = useIsMobile()
  return (
    <Layout>
      <Seo />
      <div className="flex flex-row  darkPage lg:p-0">
        <div className="xl:w-3/5 lg:w-full  m-auto ">
          <iframe
            src="/pdf/cv.pdf"
            style={{ width: "100%", height: "1200px" }}
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default CV
