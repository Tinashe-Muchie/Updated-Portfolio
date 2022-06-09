import styles from "../styles/project.module.css";
import Image from "next/image";
import { FaExternalLinkSquareAlt, FaGithubSquare, FaLink } from "react-icons/fa";
import { PROJECT_INFO_IF } from "../pages/projects";

export const Project = ({image, title, description, technologies}: PROJECT_INFO_IF) => {
    return(
        <div className={styles.project_wrapper}>
            <div className={styles.image_wrapper}>
                <Image src={"/public"} height={150} width={150} />
            </div>
            <div className={styles.content_section}>
                <span> {title} </span>
                <span> {description} </span>
                <span> {technologies} </span>
            </div>
        </div>
    );
}