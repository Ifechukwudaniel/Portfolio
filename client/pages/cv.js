import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const CV = ({ homepage }) => {
  return (
    <Layout categories={[]}>
      <Seo seo={homepage.seo} />
      <div className=" flex flex-row mt-10 ml-20">
        <h1 className="navTitle text-4xl text-link-yellow"> CV </h1>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([fetchAPI("/homepage")])

  return {
    props: { homepage },
    revalidate: 1,
  }
}

export default CV
