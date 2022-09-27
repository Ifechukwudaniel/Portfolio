import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import BlogPageImage from "../../components/Blogs/BlogPageImage"
import BlogPageAuthor from "../../components/Blogs/BlogPageAuthor"
import MarkDown from "../../components/Blogs/MarkDown"
import useIsMobile from "../../lib/isMobile"

const Article = ({ article }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <div
        style={{ background: " #F7ECC9" }}
        className="flex flex-row px-10 md:px-4 sm:px-0  overflow-auto "
      >
        <div className="flex flex-row xl:w-8/12 lg:w-9/12 sm:w-full   m-auto ">
          <div className="mt-10 bg-white border  xl:px-10 lg:px-5 py-10 md:px-4 sm:px-4 sm: w-full ">
            <div className="w-fit">
              <h1 className=" text-3xl  font-bold pl-0  pb-2 ">
                {article.title}
              </h1>
              <h2 className="font-light text-md pl-0  pb-3 text-black opacity-70">
                {article.description}
              </h2>
            </div>
            <BlogPageAuthor article={article} />
            <div className="">
              <BlogPageImage image={article.image} />
            </div>
            <div className="flex  mt-10 overflow-clip ">
              <MarkDown content={article.content} escapeHtml={true} />
            </div>
            <BlogPageAuthor article={article} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")
  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article
