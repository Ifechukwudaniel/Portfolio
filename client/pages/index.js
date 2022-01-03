// import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import ReactTyped from "react-typed"

const index = ({ homepage }) => {
  return (
    <Layout darkHeader={false}>
      <Seo seo={homepage.seo} />
      <div className=" h-screen home-background">
        <div className="h-3/4 w-2/5 bg-dark bg-opacity-90 text-offWhite home-card ">
          <h2 className="text-offWhite home-card-text">Hi My Name is Daniel</h2>
          <h2 className="text-offWhite home-card-text">
            I'm a FullStack web and mobile app developer. And i am a
          </h2>
          <ReactTyped
            loop
            typeSpeed={90}
            backSpeed={90}
            className="home-card-text"
            strings={[
              "NODE JS YODA",
              "REACT NINJA",
              "EXPRESS JS JEDI",
              "REACT NATIVE MASTER",
              "TEAM PLAYER",
            ]}
            backDelay={1}
            style={{ marginBottom: "10%" }}
          />
          <h2 className="text-offWhite home-card-text home-card-text-bottom">
            Let's take a look on my work.
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default index
