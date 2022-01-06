import React from "react"
import Moment from "react-moment"
import BlogAuthorImage from "./BlogAuthorImage"

export default function BlogPageAuthor({ article }) {
  return (
    <div className="flex flex-row xl:w-5/12 lg:w-5/12 mt-3 mb-3 border p-2">
      <div>
        <BlogAuthorImage
          className=" rounded-full"
          image={article.author.picture}
        />
      </div>
      <div className="flex flex-col ">
        <p className=" poppins text-xs pb-2 p-3">By {article.author.name}</p>
        <p className=" poppins text-xs pt-0 p-3">
          <Moment format="MMM Do YYYY">{article.published_at}</Moment>
        </p>
      </div>
    </div>
  )
}
