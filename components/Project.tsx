import styles from "../styles/project.module.css";
import { PROJECT_INFO_IF } from "../pages/projects";
import { PROJECT_IMAGE } from "./ProjectImage";

export const Project = ({
    laptop_image, tablet_image, smartphone_image, 
    title, description, technologies}: PROJECT_INFO_IF
    ) => {
    return(
        <div className={styles.project_wrapper}>
            <div>
                <PROJECT_IMAGE 
                    laptop_image={laptop_image} 
                    tablet_image={tablet_image} 
                    smartphone_image={smartphone_image}
                />
            </div>
            <div className={styles.content_section}>
                <span> {title} </span>
                <span> {description} </span>
                <span> {technologies} </span>
            </div>
        </div>
    );
}