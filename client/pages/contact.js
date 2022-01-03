import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Contact = ({ homepage }) => {
  return (
    <Layout darkHeader={true}>
      <Seo seo={homepage.seo} />
      <div className="darkPage bg-dark-light ">
        <h1 className="navTitle text-4xl text-link-yellow"> Contact</h1>
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

export default Contact
