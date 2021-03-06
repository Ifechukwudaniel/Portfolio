import React from "react"
import Card from "./BlogCard"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 2)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div className=" grid gap-x-20 gap-y-20 grid-cols-2 mr-10 mt-10 ml-10 mb-6">
      {articles.map((article, i) => {
        return <Card article={article} key={`article__left__${article.slug}`} />
      })}
    </div>
  )
}

export default Articles
