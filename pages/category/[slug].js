import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { CategoryButton, CategoryItem } from "../../components/Blogs/Categories"
import BlogCard from "../../components/Blogs/BlogCard"
import { sampleSize } from "lodash"

const Category = ({ category, categories, articles }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  }

  let categoryShuffle = sampleSize(categories, 10)

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="flex flex-row">
        <div
          style={{ background: "#F7ECC9", minHeight: "90vh" }}
          className=" xl:w-8/12  lg:w-8/12  bg-link-yellow overflow-y-auto xl:pl-16 md:pl-16  px-3 pt-8"
        >
          <div className="w-5/12 mb-6">
            <CategoryItem category={category} />
          </div>
          {articles.map((article) => (
            <BlogCard hideCategory={true} article={article} />
          ))}
        </div>
        <div className="overflow-y-auto">
          <div className=" xl:w-4/12  lg:w-4/12  p-5 hidden-menu fixed ">
            <div className="mt-10  ">
              <h1 className="Poppins-Medium text-2xl"> Recommended topics</h1>
            </div>
            <div className="flex flex-wrap mt-5 ">
              {categoryShuffle.map((category) => (
                <CategoryButton category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = await fetchAPI(`/categories/${params.slug}`)
  const categories = await fetchAPI("/categories")
  const articles = category.articles

  return {
    props: { category, categories, articles },
    revalidate: 1,
  }
}

export default Category
