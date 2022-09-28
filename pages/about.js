// import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "next/image"

const About = ({ homepage }) => {
  const skillList = [
    "React",
    "Java",
    "MongoDb",
    "MySql",
    "Solidity",
    "NoSql",
    "HardHat",
    "Node Js",
    "Express  Js",
    "Next JS",
    "Rust",
    "Typescript",
    "Javascript",
    "Brownie",
  ]

  const strengthList = [
    "Motivated to improve",
    "Creative",
    "Attention to  detail ",
  ]
  return (
    <Layout darkHeader={false}>
      <Seo />
      <div className=" flex xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
        <div className="flex flex-col justify-center bg-dark-light p-4 xl:w-3/5 lg:w-3/5 ">
          <div className=" w-1/4 rounded-xl m-auto ">
            <Image src="/images/png/me.png" width="200" height="200" />
          </div>
          <div className=" m-auto mt-10 ">
            <p className="text-2xl text-center text-white  Poppins-Medium  ">
              I am a full stack Web and mobile app developer. I enjoy creating
              applications that scale.
              <br />
              <br />
              Some of the tools I use include: React, react native, nextjs
              Typescript , nodejs, express, Koa, HApi Strapi , socketIO,
              postgreSQL, mongodb, firebase, e.t.c.
              <br />
              <br />I love learning and I'm always adding new skills and
              improving the quality of my products.
            </p>
          </div>
          <div className=" m-auto mt-16 mb-24 ">
            <a
              href="mailto: ifechukwu0@icloud.com"
              className="py-4 px-16 bg-white  hover:bg-link-yellow hover:drop-shadow-2xl text-dark border border-dark arial-black  "
            >
              Contact
            </a>
          </div>
        </div>
        <div className="xl:w-2/5 lg:w-2/5  p-4   ">
          <div>
            <h1 className="navTitle text-4xl text-link-yellow mt-3 tracking-widest ">
              Skill
            </h1>
          </div>
          <div className=" flex flex-wrap mt-2">
            {skillList.map((skill) => (
              <div className=" text-2xl py-4 px-4 ml-0 mr-4 m-3 bg-white drop-shadow-md hover:drop-shadow-2xl text-dark border border-dark itim">
                {skill}
              </div>
            ))}
          </div>

          <div>
            <h1 className="navTitle text-4xl text-link-yellow mt-5 tracking-widest">
              Strength
            </h1>
          </div>
          <div className=" flex flex-wrap mt-1">
            {strengthList.map((skill) => (
              <div className=" text-2xl py-4 px-4 ml-0 mr-4 m-3 bg-white drop-shadow-md hover:drop-shadow-2xl text-dark border border-dark itim">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
