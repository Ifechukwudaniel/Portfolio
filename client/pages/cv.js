import { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { Document, Page } from "react-pdf"
import { getStrapiMedia } from "../lib/media"

const CV = ({ homepage, cv }) => {
  let cvFile = getStrapiMedia(cv.cv_file)
  return (
    <Layout categories={[]}>
      <Seo seo={homepage.seo} />
      <div className="flex flex-row justify-center">
        <div className="w-full">
          <iframe className="flex-col w-96 h-96" src="/pdf/cv.pdf" />
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
