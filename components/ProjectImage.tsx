import styles from "../styles/projectImage.module.css";
import Image from 'next/image';

interface PROJECT_IMAGE_IF {
    laptop_image: string;
    tablet_image: string;
    smartphone_image: string;
}

export const PROJECT_IMAGE = ({laptop_image, tablet_image, smartphone_image}: PROJECT_IMAGE_IF) => {
    return (
        <div>
            <div className={styles.container}>
  
            <div className={styles.laptop}>
                <Image className={styles.browser} src={laptop_image} alt="" layout="fill"/>
                <div className={styles.keyboard}></div>
            </div>
            
            <div className={styles.tablet}>
                <Image className={styles.browser} src={tablet_image} alt="" layout="fill"/>
            </div>
            
            <div className={styles.phone}>
                <Image className={styles.browser} src={smartphone_image} alt="" layout="fill"/>
            </div>
            
            </div> 
        </div>
    )
}