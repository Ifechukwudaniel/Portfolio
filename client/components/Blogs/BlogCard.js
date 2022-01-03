import React from "react"
import Link from "next/link"
import BlogImage from "./BlogImage"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="block">
        <div className="w-100 h-90">
          <div className="h-3/4">
            <BlogImage image={article.image} />
          </div>
          <div className="h-1/4">
            <h1 className="navTitle text-3xl uppercase font-bold Poppins-Bold text-white">
              {article.category.name}
            </h1>
            <h1 className="text-base uppercase  Poppins-Medium text-dark">
              {article.title}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
