// Page - Home

import { useEffect } from 'react';
import Works from '../components/Works';
import { motion } from 'framer-motion'

const PageWork = () => {

    useEffect(() => {

    }, []);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <h1 className='work-heading'>My Projects</h1>
        <div className='work-underline'></div>
            <motion.section className='work-wrapper'>
            
                <Works/>
            
            </motion.section>
        </motion.div>
    );

};

export default PageWork;