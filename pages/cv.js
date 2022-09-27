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
      <Seo seo={homepage.seo} />
      <div className="flex flex-row py-5 px-5 darkPage">
        <div className=" xl:w-3/5 lg:w-4/5 md:w-4/5 sm:w-fit m-auto ">
          <iframe
            src="/pdf/cv.pdf"
            style={{ width: "100%", height: mobile ? "400px" : "650px" }}
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, cv] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/cv"),
  ])

  return {
    props: { homepage, cv },
    revalidate: 1,
  }
}

export default CV
