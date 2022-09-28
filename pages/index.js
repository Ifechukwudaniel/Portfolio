// import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import ReactTyped from "react-typed"

const index = () => {
  return (
    <Layout darkHeader={false}>
      <Seo />
      <div className=" h-screen home-background">
        <div className="h-3/4 xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-full  bg-dark bg-opacity-90 text-offWhite home-card ">
          <h2 className="text-offWhite  text-5xl  home-card-text">
            Hi My Name is Daniel
          </h2>
          <h2 className="text-offWhite text-4xl home-card-text">
            I'm a FullStack web and mobile app developer. And i am a
          </h2>
          <ReactTyped
            loop
            typeSpeed={90}
            backSpeed={90}
            className="text-4xl  home-card-text"
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
          <h2 className="text-offWhite  text-5xl home-card-text home-card-text-bottom">
            Let's take a look on my work.
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default index
