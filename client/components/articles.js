import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 2)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)
  console.log(leftArticles.length, rightArticles.length)

  return (
    <div className=" grid gap-x-20 gap-y-5 grid-cols-2 mr-10 mt-10 ml-10 mb-6">
      {articles.map((article, i) => {
        return <Card article={article} key={`article__left__${article.slug}`} />
      })}
    </div>
  )
}

export default Articles
