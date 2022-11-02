import {useLocation} from 'react-router-dom';
import {React, useEffect} from 'react';
import {motion } from "framer-motion";
import { Link } from 'react-router-dom';

export const PageDetail = () => {
    let location = useLocation();
    const {title} = location.state;
    const {content} = location.state; 

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <div className='detail-wrapper'>
            <Link to='/work' className='back-to-work'> Back </Link>
            <div className='detail-content'>
                <h2>{title}</h2>
                <figure dangerouslySetInnerHTML={{__html: content}}>
                </figure>
            </div>
        </div>
        </motion.div>
    );                                              
};

export default PageDetail;