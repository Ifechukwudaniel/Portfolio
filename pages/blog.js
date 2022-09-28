// import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { CategoryButton, CategoryItem } from "../components/Blogs/Categories"
import BlogCard from "../components/Blogs/BlogCard"

const Blog = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo />
      <div className="flex">
        <div
          style={{ background: "#F7ECC9" }}
          className=" xl:w-8/12  lg:w-8/12  bg-link-yellow overflow-y-auto xl:pl-16 md:pl-16  px-3 pt-8"
        ></div>
        <div className="overflow-y-auto">
          <div className=" xl:w-4/12  lg:w-4/12  p-5 hidden-menu fixed ">
            <div className="mt-10  ">
              <h1 className="Poppins-Medium text-2xl"> Recommended topics</h1>
            </div>
            <div className="flex flex-wrap mt-5 "></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
