import { PROJECT_DETAIL } from "../../components/ProjectDetail";
import styles from '../../styles/evanna.module.css';
import { useRouter } from 'next/router';

const project_detail = {
    title: 'CS Bookstore',
    laptop_image: '/images/cs-books.laptop.png',
    tablet_image: '/images/cs-books.tablet.png',
    smartphone_image: '/images/cs-books.mobile.png',
    link: 'https://cs-books.netlify.app/#/'
}

const CS_BOOKSTORE = () => {

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
                Evanna Homeware is an online store for a local company that offers interior decor services, sells 
                furniture and decor accessories. I chose to build this SPA inorder to understand how to integrate GraphCMS
                with Stripe. It was an exciting opportunity for me to cement my knowledge of react hooks, React Router, 
                TypeScript and Apollo GraphQL.
                </span>
                <span>
                While i was developing the site i had trouble with image optimization, the images were slowing the site speed.
                Through the use of google i ended up figuring how to optimize images in order to speed up the site load time.
                One thing that i'm still struggling with is file organisation and if i were to improve anything on this project, 
                it would be the way i organised files. 
                </span>
                <span>
                I also learnt how to use wireframes in order to improve my productivity. Previously i used to jump into a 
                project and this usually resulted in me getting stuck at some point during development.
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

export default CS_BOOKSTORE;