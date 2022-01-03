// import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const About = ({ homepage }) => {
  return (
    <Layout darkHeader={true}>
      <Seo seo={homepage.seo} />
      <div className="darkPage bg-dark-light ">
        <div className=" flex flex-row  ml-20">
          <h1 className="navTitle text-4xl text-link-yellow mt-10"> About </h1>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([fetchAPI("/homepage")])

  return {
    props: { homepage },
    revalidate: 1,
  }
}

export default About
