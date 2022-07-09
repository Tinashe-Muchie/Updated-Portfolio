import { PROJECT_DETAIL } from "../../components/ProjectDetail";
import styles from '../../styles/evanna.module.css';
import { useRouter } from 'next/router';

const project_detail = {
    title: 'OMDB Movies',
    laptop_image: '/images/omdb_laptop.png',
    tablet_image: 'image',
    smartphone_image: 'image',
    link: 'https://omdb-movie-watchlis-t.netlify.app/#/'
}

const OMDB_MOVIES = () => {

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
                OMDB movies is a storage site for movies. The idea behind developing it was to help someone who 
                might want to search and store movie details for later use. I chose to build this SPA inorder to 
                learn how to wrap a Rest API in a graphQl api. The project helped me understand how to use GraphQl 
                on the backend as well as on the front end by utilizing Apollo Client. It helped me properly understand how to use CSS grid and 
                flex-box.
                </span>
                <span>
                While i was developing the site i had trouble with pagination since it was my first time dealing 
                with a project that required its use. I also struggled a bit with using grid and flex-box together.
                I researched and through trial and error i finally figured how to do pagination seamlessly and i can confidently
                say that i know most of what is required to develop a grid layout. 
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

export default OMDB_MOVIES;