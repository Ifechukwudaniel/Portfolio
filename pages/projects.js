import Layout from "../components/layout"
import projects from "../components/Project"
import ProjectItem from "../components/Project/ProjectItem"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Projects = () => {
  return (
    <Layout categories={[]}>
      <Seo />
      <div className="xl:px-20 lg:px-15 md:px-10 sm:px-5 bg-offWhite">
        <div className="flex flex-col py-5">
          <h1 className="navTitle text-center text-4xl text-link-yellow ">
            PROJECTS
          </h1>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              isOpenSource={project.isOpenSource}
              githubLink={project.githubLink}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
