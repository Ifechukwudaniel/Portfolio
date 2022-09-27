import React from "react"
import Link from "next/link"
import BlogImage from "./BlogImage"
import AuthorImage from "./AuthorImage"
import moment from "moment"

const BlogCard = ({ article, hideCategory }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className="flex flex-row bg-white drop-shadow-sm hover:drop-shadow-lg mb-6 border">
        <div className="w-2/3 xl:pl-9 lg:pl-6 md:pl-3 sm:pl-2 pt-6 md:pt-4 sm:p-2">
          <div className="flex flex-row p-1 h-10 mb-2">
            <AuthorImage
              className="rounded-full"
              image={article.author.picture}
            />
            <p className="ml-2 pt-3 blog-author-name">{article.author.name} </p>
          </div>
          <div className="flex flex-col h-24 ">
            <h1 className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-left daysOne uppercase  text-dark-light  ">
              {article.title}
            </h1>
            <p className="xl:text-md lg:text-md md:text-sm sm:text-sm overflow-hidden roboto text-left   text-dark-light ">
              {article.description}
            </p>
          </div>
          <div className="flex flex-row">
            <p className=" text-xs text-left Poppins-Medium text-link-gray hidden-menu">
              {moment(article.createdAt).format("MMM DD, YYYY")}
            </p>
            <p className=" ml-5 text-xs text-left Poppins-Medium text-link-gray hidden-menu">
              {article.readTime} Min Read
            </p>
            {!hideCategory && (
              <Link href={`/category/${article.category.slug}`}>
                <div className=" md:ml-0  sm:ml-0 xl:ml-6 lg:ml-6 text-sm py-1 px-1 mr-4 m-3 bg-white drop-shadow-md hover:drop-shadow-xl text-dark border border-dark itim ">
                  {article.category.name}
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="w-1/3 xl:p-5 lg:p-4 md:p2 sm:p-1 m-auto">
          <BlogImage image={article.image} />
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
