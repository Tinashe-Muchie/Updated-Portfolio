import { PROJECT_DETAIL } from "../../components/ProjectDetail";
import styles from '../../styles/evanna.module.css';
import { useRouter } from 'next/router';

const project_detail = {
    title: 'Poly Dashboard',
    laptop_image: '/images/poli_dashboard_laptop.png',
    tablet_image: '/images/poli_dashboard_tablet.png',
    smartphone_image: '/images/poli_dashboard_mobile.png',
    link: 'https://poly-dashboard.netlify.app'
}

const POLY_DASHBOARD = () => {

    const router = useRouter();
    return (
        <div>
             <PROJECT_DETAIL 
                title={project_detail.title}
                laptop_image={project_detail.laptop_image}
                tablet_image={project_detail.tablet_image}
                smartphone_image={project_detail.smartphone_image}
                link={project_detail.link}
            />
            <div className={styles.product_detail}>
                <span>
                Poly Dashboard is a dashboard that shows a particular hospitals covid statistics per each and every 
                month of the year. I chose to develop this site because i wanted to learn how to do dashboard. When i 
                thought about it seemed like it was a complicated project to build so i decided to do it so that i could 
                strengthen my knowledge of CSS grid layouts.  
                </span>
                <span>
                The project helped to understand how to integrate google charts in a project. I also used react calendar,
                and i understood how to make one from scratch. Overally the project proved to be a good learning resource 
                as it helped me refresh my CSS and how to organize 
                </span>
                <span>
                
                </span>
                <div>
                    <button 
                        className={styles.buttons} 
                        onClick={() => router.back()}
                        type="button"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        </div>
    );
}

export default POLY_DASHBOARD;