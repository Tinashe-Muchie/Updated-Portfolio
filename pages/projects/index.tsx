import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/projects.module.css";
import { Project } from "../../components/Project";

export interface PROJECT_INFO_IF {
    id?: number;
    image: string;
    title: string;
    description: string;
    technologies: string;
}

const PROJECTS_INFO: Array<PROJECT_INFO_IF> = [
    {
        id: 0,
        image: 'image',
        title: 'Evanna Homeware Shop',
        description: 'An online store',
        technologies: 'React.js, CSS3'
    },
    {
        id: 1,
        image: 'image',
        title: 'Evanna Homeware Shop',
        description: 'An online store',
        technologies: 'React.js, CSS3'
    },
    {
        id: 2,
        image: 'image',
        title: 'OMDB Movies',
        description: 'An online store',
        technologies: 'React.js, CSS3, GraphQl, Apollo Client'
    }
]

const ProjectsPage = () => (
  <Layout title="projects">
    <main className={styles.container}>
      <h2> Projects Page </h2>
      {
        PROJECTS_INFO.map((project)=> (
        <Link href="">
          <a>
            <Project 
                image={project.image}
                title={project.title} 
                description={project.description}
                technologies={project.technologies}    
            />
          </a>
        </Link>
        ))
      }
        
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default ProjectsPage;