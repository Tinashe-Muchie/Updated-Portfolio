import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/projects.module.css";
import { Project } from "../../components/Project";

export interface PROJECT_INFO_IF {
    id?: string;
    laptop_image: string;
    tablet_image: string;
    smartphone_image: string;
    title: string;
    description: string;
    technologies: string;
}

const PROJECTS_INFO: Array<PROJECT_INFO_IF> = [
    {
        id: 'evanna_homeware',
        laptop_image: '/images/evannahomeware_laptop.png',
        tablet_image: '/images/evannahomeware_tablet.png',
        smartphone_image: '/images/evannahomeware_mobile.png',
        title: 'Evanna Homeware Shop',
        description: 'An interior decor services online shop that sells furniture as well as interior decor products.',
        technologies: 'React.js, Css3, GraphCMS, Apollo Client, stripe, Typescript'
    },
    {
        id: 'poly_dashboard',
        laptop_image: '/images/poli_dashboard_laptop.png',
        tablet_image: '/images/poli_dashboard_tablet.png',
        smartphone_image: '/images/poli_dashboard_mobile.png',
        title: 'Poly Dashboard',
        description: 'A poly clinic dashboard that highlights and shows the clinic information each month of the year.',
        technologies: 'React.js, Css3, Typescript, responsive'
    },
    {
        id: 'omdb_movies',
        laptop_image: '/images/omdb_laptop.png',
        tablet_image: '/image',
        smartphone_image: '/image',
        title: 'OMDB Movies',
        description: 'OMDB Movies is an SPA that allows users to search, discover and save movies they want to watch later.',
        technologies: 'Typescript, React, OMDB movie API, Styled Components, GraphQl, Apollo Client, Apollo Server'
    },
    {
      id: 'cs_bookstore',
      laptop_image: '/images/cs-books.laptop.png',
      tablet_image: '/images/cs-books.tablet.png',
      smartphone_image: '/images/cs-books.mobile.png',
      title: 'CS Bookstore',
      description: 'A bookstore e-commerce store that sells books.',
      technologies: 'Javascript ES6+, React, Commerce.js, Styled Components, Stripe'
  }
]

const ProjectsPage = () => (
  <Layout title="projects">
    <main className={styles.container}>
      <div className={styles.project_wrapper}>
      {
        PROJECTS_INFO.map((project)=> (
        <Link href={{
          pathname: "/projects/[slug]",
          query: {slug: project.id}
        }} 
        key={project.id}>
          <a className={styles.link}>
            <Project 
                laptop_image={project.laptop_image}
                tablet_image={project.tablet_image}
                smartphone_image={project.smartphone_image}
                title={project.title} 
                description={project.description}
                technologies={project.technologies}    
            />
          </a>
        </Link>
        ))
      }
      </div>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default ProjectsPage;