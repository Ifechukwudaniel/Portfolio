import Layout from "../components/layout"
import ProjectItem from "../components/Project/ProjectItem"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Projects = ({ homepage, projects }) => {
  return (
    <Layout categories={[]}>
      <Seo seo={homepage.seo} />
      <div className="xl:px-20 lg:px-15 md:px-10 sm:px-5 bg-offWhite">
        <div className="flex flex-col py-5">
          <h1 className="navTitle text-center text-4xl text-link-yellow ">
            PROJECTS
          </h1>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectItem
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, projects] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/projects"),
  ])

  return {
    props: { homepage, projects },
    revalidate: 1,
  }
}

export default Projects
