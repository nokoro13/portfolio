import {useLocation} from 'react-router-dom';
import {React, useEffect, useState} from 'react';
import {filterProps, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const PageDetail = () => {
    let location = useLocation();
    const {title} = location.state;
    const {content} = location.state;
    
    //0.JS % 1.HTML % 2.CSS %
    const wooStoreTech  = ['PHP', 'WordPress', 'WooCommerce'];
    const moovyAppTech  = ['66.6', '8.3', '25.1'];
    const calcAppTech   = ['React', 'HTML', 'CSS'];    
    const portfolioTech = ['56.6', '6.6', '37.1'];

    const [skill, setSkill] = useState([]);
    
    //state easy filter

    const first = skill[0];
    const second = skill[1];
    const third = skill[2];


    const handleSkills = () => {
        if(location.state.title === 'WooStore') {
            setSkill(wooStoreTech);
        } if(location.state.title === 'Moovy App') {
            setSkill(moovyAppTech);
        } if(location.state.title === 'Calculator App') {
            setSkill(calcAppTech);
        } if(location.state.title === 'Portfolio') {
            setSkill(portfolioTech);
        }
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        window.onload = handleSkills();
      }, []);

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <div className='detail-wrapper'>
            <Link to='/work' className='back-to-work'> Back </Link>
            <div className='detail-content'>
                <h2>{title}</h2>
                <figure dangerouslySetInnerHTML={{__html: content}}>
                </figure>
                <div className='skills'><p>{first}%</p><CircularProgress className='tech-load' style={{ width: 60, height: 60 }} variant='determinate' value={first !== null ? first : '0'} color='success'/></div>
                <div className='skills'><p>{second}%</p><CircularProgress style={{ width: 60, height: 60 }} variant='determinate' value={second} color='secondary'/></div>
                <div className='skills'><p>{third}%</p><CircularProgress style={{ width: 60, height: 60 }} variant='determinate' value={third} color='inherit'/></div>
            </div>
        </div>
        </motion.div>
    );                                              
};

export default PageDetail;