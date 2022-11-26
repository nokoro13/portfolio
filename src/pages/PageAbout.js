// Page - Home

import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// import Snippet from '../components/Snippet';

const PageAbout = () => {

    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/pages/172';

    const [aboutPage, setAboutPage] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    
    useEffect(() => {
        fetch(restPath)
        .then((response) => response.json())
        .then((data) => {
            setAboutPage(data);
            setPostLoaded(true);
            // console.log(data);
        })
    }, [restPath]);
    console.log(aboutPage.id);

    return (
<>
        <Helmet>
        
            <title>Nokoro | About</title>
            <meta name="description" content="Junior front-end web developer and web designer graduate through BCIT’s Front End Web Development program."/>
        
        </Helmet>
    <>
        <motion.div className='home-header' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
            <>
            { postLoaded ?
            <>
                <h1 className='about-title'>{aboutPage.title.rendered}</h1>
                <div className="home-content" dangerouslySetInnerHTML={{__html:aboutPage.content.rendered}}>
                    
                </div>
                
                {/* <section className='snippet-container'>
                    <div>
                        <h2>Bonus Code!</h2>
                        <p className='bonus-text'>Highlight you code like this with <a href='https://www.npmjs.com/package/prismjs'>Prism JS</a></p>
                    </div>
                
                <Snippet pageid={aboutPage.id} about={aboutPage}/>
                </section> */}
            </>
        : 
            <Loading />
        }
        </>
            </motion.div>
            </>
            </>
    );

};

export default PageAbout;