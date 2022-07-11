import { PROJECT_DETAIL } from "../../components/ProjectDetail";
import styles from '../../styles/evanna.module.css';
import { useRouter } from 'next/router';

const project_detail = {
    title: 'CS Bookstore',
    laptop_image: '/images/cs-books.laptop.png',
    tablet_image: '/images/cs-books.tablet.png',
    smartphone_image: '/images/cs-books.mobile.png',
    site_link: 'https://cs-books.netlify.app/#/',
    github_link: 'https://github.com/Tinashe-Muchie/Bookstore'
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
                site_link={project_detail.site_link}
                github_link={project_detail.github_link}
            />
            <div className={styles.product_detail}>
                <span>
                CS Bookstore is an online store for a local company that sells books. I chose to build this as 
                a single-page application because I wanted to really get to grips with how react.js works. 
                This project was an opportunity for me to learn how to make a UI/UX for a shopping cart and 
                understand the integration of the Stripe payment method on an e-commerce website.
                </span>
                <span>
                While i was developing the site it took me a while to understand how the Stripe payment API, commerce.js sdk
                worked. Through the use of google i ended up figuring how to do it. I used the stripe documents as well as other
                developers blog sites that explained how to do it. After it was said and done i gained a great deal of knowledge
                on how to navigate through the pages, how to pass state via the react router. In as much i think i made progress 
                with this project i still think i can improve the load time of the application as well as refactoring of the code. 
                </span>
                <span>
                One other thing that i could have done to improve my developer experience with this project is to plan the whole 
                project in advance. It could have helped me save so much time.
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