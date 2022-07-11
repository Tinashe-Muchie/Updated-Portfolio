import styles from '../styles/projectDetail.module.css';
import { PROJECT_IMAGE } from './ProjectImage';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

interface Project_Detail {
    title: string;
    laptop_image: string;
    tablet_image: string;
    smartphone_image: string;
    site_link: string;
    github_link: string;
}

export const PROJECT_DETAIL = (
    {title, laptop_image, tablet_image, smartphone_image, site_link, github_link}: Project_Detail
    ) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div>
                    {title}
                </div>
                <div>
                <a href={site_link} target="_blank" rel="noreferrer">
                    Live Site Link 
                </a>
                <a href={github_link} target="_blank" rel="noreferrer">
                    Github Link 
                </a>
                </div>
            </div>
            <div className={styles.project_image}>
            <PROJECT_IMAGE 
                    laptop_image={laptop_image} 
                    tablet_image={tablet_image} 
                    smartphone_image={smartphone_image}
                />
            </div>
        </div>
    );
}