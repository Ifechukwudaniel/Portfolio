import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Projects = ({ homepage }) => {
  return (
    <Layout categories={[]}>
      <Seo seo={homepage.seo} />
      <h1> Projects </h1>
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

export default Projects
