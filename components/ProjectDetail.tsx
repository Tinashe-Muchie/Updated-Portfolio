import styles from '../styles/projectDetail.module.css';
import { PROJECT_IMAGE } from './ProjectImage';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

interface Project_Detail {
    title: string;
    laptop_image: string;
    tablet_image: string;
    smartphone_image: string;
    link: string;
}

export const PROJECT_DETAIL = (
    {title, laptop_image, tablet_image, smartphone_image, link}: Project_Detail
    ) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div>
                    {title}
                </div>
                <a href={link} target="_blank">
                    Live Site Link 
                </a>
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