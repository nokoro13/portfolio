import {useLocation} from 'react-router-dom';
import {React, useEffect, useState} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Snippet from '../components/Snippet';

export const PageDetail = () => {
    let location = useLocation();
    const {title}= location.state;
    const {content} = location.state;
    const {id} =location.state;

    //(Tech = JS %) (TechTwo = HTML %) (TechThree = CSS %)
    //Constants to be used after the handleSkills function runs and finds a match, these constants will be set by the appropriate useState(). After words those state values will be used for the <CircularProgress/> Called in as {skill} {skillTwo} {skillThree}

    //WooStore tech % used
    const wooStoreTech  = 0; 
    const wooStoreTechTwo  = 0;
    const wooStoreTechThree  = 0;

    //Moovy App tech % used
    const moovyAppTech  = 67; 
    const moovyAppTechTwo  = 8;
    const moovyAppTechThree  = 25;

    //Calulator App tech % used
    const calcAppTech   = 33.3;  
    const calcAppTechTwo   = 33.3;
    const calcAppTechThree   = 33.3;

    //Portfolio tech % used
    const portfolioTech = 62; 
    const portfolioTechTwo = 5;
    const portfolioTechThree = 33;

    /* States for the tech used */
    //JS, HTML, CSS
    const [skill, setSkill] = useState(0);
    const [skillTwo, setSkillTwo] = useState(0);
    const [skillThree, setSkillThree] = useState(0);

    //handles the meta content
    const [meta, setMeta] = useState();

    /* (handleSkills) Goes over all state values (posts) and looks for a title that matches*/
    /* (handleSkills) Once a match is found check if the initial state is less than the targetted value. Add 1 to the initial state every 1/10 of a second until taget is met for each state value (3)*/

    const handleSkills = () => {
        //Handles WooStore Tech/Skills 
        if(location.state.title === 'WooStore') {
            if(skill < wooStoreTech) {
                setInterval(()=> {
                    setSkill((skill)=> (skill >= wooStoreTech ? wooStoreTech : skill + 1));
                }, 100);
            } 
            if(skillTwo < wooStoreTechTwo) {
                setInterval(()=> {
                    setSkillTwo((skill)=> (skill >= wooStoreTechTwo ? wooStoreTechTwo : skill + 1));
                }, 100);
            }
            if(skillThree < wooStoreTechThree) {
                setInterval(()=> {
                    setSkillThree((skill)=> (skill >= wooStoreTechThree ? wooStoreTechThree : skill + 1));
                }, 100);
            };
            // setCode();
            setMeta('A Full eCommerce store built using WordPress, WooCommerce, and a variety of plugins.');
            console.log(id);
        } 

        //Handles Moovy App Tech/Skills
        if(location.state.title === 'Moovy App') {
            if(skill < moovyAppTech) {
                setInterval(()=> {
                    setSkill((skill)=> (skill >= moovyAppTech ? moovyAppTech : skill + 1));
                }, 100);
            }
            if(skillTwo < moovyAppTechTwo) {
                setInterval(()=> {
                    setSkillTwo((skill)=> (skill >= moovyAppTechTwo ? moovyAppTechTwo : skill + 1));
                }, 100);
            }
            if(skillThree < moovyAppTechThree) {
                setInterval(()=> {
                    setSkillThree((skill)=> (skill >= moovyAppTechThree ? moovyAppTechThree : skill + 1));
                }, 100);
            };
            
            //Setting the meta content 
            setMeta('Movie database application made with React.js, with the use of TMBD’s API. Fetching data from TMBD once to display movies with their content, organized by categories such as popular, now playing, top rated, and upcoming.');
            // const newLocation = location.state;
            // console.log(newLocation);
            console.log(id);
        } 
        
        //Handles Calculator App Tech/Skills
        if(location.state.title === 'Calculator App') {
            if(skill < calcAppTech) {
                setInterval(()=> {
                    setSkill((skill)=> (skill >= calcAppTech ? calcAppTech : skill + 1));
                }, 100);
            }
            if(skill < calcAppTechTwo) {
                setInterval(()=> {
                    setSkillTwo((skill)=> (skill >= calcAppTechTwo ? calcAppTechTwo : skill + 1));
                }, 100);
            }
            if(skill < calcAppTechThree) {
                setInterval(()=> {
                    setSkillThree((skill)=> (skill >= calcAppTechThree ? calcAppTechThree : skill + 1));
                }, 100);
            };
            // setCode();
            setMeta('Calculator app built in React for simple quick math equations.');
        } 
        
        //Handles Portfolio Skills/Tech
        if(location.state.title === 'Portfolio') {
            if(skill < portfolioTech) {
                setInterval(()=> {
                    setSkill((skill)=> (skill >= portfolioTech ? portfolioTech : skill + 1));
                }, 100);  
            }
            if(skill < portfolioTechTwo) {
                setInterval(()=> {
                    setSkillTwo((skill)=> (skill >= portfolioTechTwo ? portfolioTechTwo : skill + 1));
                }, 100);
            }
            if(skill < portfolioTechThree) {
                setInterval(()=> {
                    setSkillThree((skill)=> (skill >= portfolioTechThree ? portfolioTechThree : skill + 1));
                }, 100);
            };
            // setCode();
            setMeta('Portfolio website, a headless CMS built using React and WordPress’ REST API.');
        }
    }

    //After one second call the handleSkills function
    useEffect(() => {
        window.scrollTo(0, 0); //may need to fix
        //window.onload = handleSkills();
        const timeout = setTimeout(handleSkills, 1000);
        return () => {
            clearTimeout(timeout);
        }
        
        //eslint-disable-next-line
      },[]);//may need to fix

      

    return(

        <>

        <Helmet prioritizeSeoTags={true}>
        <title>Nokoro | {title}</title>
        <meta name="description" content={meta}/>
        </Helmet>

        <>

        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <div className='detail-wrapper'>
            <Link to='/work' className='back-to-work'> Back </Link>
            <div className='detail-content'>


                
                <h1>{title}</h1>

                <div className='skills-container'>

                    <div className='skills'>
                        <p>{skill}%</p>
                        <CircularProgress className='tech-load' style={{ width: 60, height: 60, color: 'aquamarine '  }} variant='determinate' value={skill}/>
                    </div>

                    <div className='skills'>
                        <p>{skillTwo}%</p>
                        <CircularProgress style={{ width: 60, height: 60, color: '#e34c26 '}} variant='determinate' value={skillTwo} />
                    </div>

                    <div className='skills'>
                        <p>{skillThree}%</p>
                        <CircularProgress style={{ width: 60, height: 60, color: '#cc99cd'}} variant='determinate' value={skillThree}/>
                    </div>

                </div>

                <ul className='skills-list'>
                    <li className={skill      === 0 ? 'skill-item-1' : 'skill-item-1-animate'}>JS</li>
                    <li className={skillTwo   === 0 ? 'skill-item-2' : 'skill-item-2-animate'}>HTML</li>
                    <li className={skillThree === 0 ? 'skill-item-3' : 'skill-item-3-animate'}>CSS</li>
                </ul>

                <article className='article-width' dangerouslySetInnerHTML={{__html: content}}>
                </article>

            </div>
            <section className='snippet-container'>
                <Snippet newLocation={location} id={id}/>
            </section>
                
        </div>
        
        </motion.div>
        </>
        </>
    );                                              
};

export default PageDetail;