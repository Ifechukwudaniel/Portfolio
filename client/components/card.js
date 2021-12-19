import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <a style={{ background: "black" }} className="block ">
        <div className="w-100 h-90">
          <div className="h-3/4">
            <NextImage image={article.image} />
          </div>
          <div className="h-1/4">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
