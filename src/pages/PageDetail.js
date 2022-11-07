import {useLocation} from 'react-router-dom';
import {React, useEffect, useState} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const PageDetail = () => {
    let location = useLocation();
    const {title} = location.state;
    const {content} = location.state;
    
    //(Tech = JS %) (TechTwo = HTML %) (TechThree = CSS %)
    //Constants to be used after the handleSkills function runs and finds a match, these constants will be set by the appropriate useState(). After words those state values will be used for the <CircularProgress/> Called in as {skill} {skillTwo} {skillThree}

    //WooStore tech % used
    const wooStoreTech  = 0; 
    const wooStoreTechTwo  = 0;
    const wooStoreTechThree  = 100;

    //Moovy App tech % used
    const moovyAppTech  = 66.6; 
    const moovyAppTechTwo  = 8.3;
    const moovyAppTechThree  = 25.1;

    //Calulator App tech % used
    const calcAppTech   = 33.3;  
    const calcAppTechTwo   = 33.3;
    const calcAppTechThree   = 33.3;

    //Portfolio tech % used
    const portfolioTech = 56.6; 
    const portfolioTechTwo = 6.6;
    const portfolioTechThree = 37.1;

    /* States for the tech used */
    const [skill, setSkill] = useState(0);
    const [skillTwo, setSkillTwo] = useState(0);
    const [skillThree, setSkillThree] = useState(0);

    //State for outputting code

    const [code,setCode] = useState();

    //Output code

    const firstOutput = 
        `useEffect(() => {
            const timeout = setTimeout(handleSkills, 1000);
            return () => {
                clearTimeout(timeout);
            }
        });`;
    
    //state easy filter (not being used anymore)

    // const first = skill[0];
    // const second = skillTwo[0];
    // const third = skillThree[0];

    /* (handleSkills) Goes over all state values (posts) and looks for a title that matches*/
    /* (handleSkills) Once a match is found check if the initial state is less than the targetted value. Add one to the initial state every tenth of a second until taget is met for each state value (3)*/

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
            setCode(firstOutput);
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
        }
    }

    //After one second call the handleSkills function
    useEffect(() => {
        //window.scrollTo(0, 0); have to find a new way to scrool to top on page refresh
        //window.onload = handleSkills();
        const timeout = setTimeout(handleSkills, 1000);
        return () => {
            clearTimeout(timeout);
        }
      });
      
    

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <div className='detail-wrapper'>
            <Link to='/work' className='back-to-work'> Back </Link>
            <div className='detail-content'>


                
                <h2>{title}</h2>
                <figure dangerouslySetInnerHTML={{__html: content}}>
                </figure>


                <div className='skills-container'>

                    <div className='skills'>
                        <p>{skill}%</p>
                        <CircularProgress className='tech-load' style={{ width: 60, height: 60, color: 'aquamarine'  }} variant='determinate' value={skill}/>
                    </div>

                    <div className='skills'>
                        <p>{skillTwo}%</p>
                        <CircularProgress style={{ width: 60, height: 60, color: 'white'}} variant='determinate' value={skillTwo} />
                    </div>

                    <div className='skills'>
                        <p>{skillThree}%</p>
                        <CircularProgress style={{ width: 60, height: 60, color: 'black'}} variant='determinate' value={skillThree}/>
                    </div>

                    <ul className='skills-list'>
                        <li className={skill      === 0 ? 'skill-item-1' : 'skill-item-1-animate'}>JS</li>
                        <li className={skillTwo   === 0 ? 'skill-item-2' : 'skill-item-2-animate'}>HTML</li>
                        <li className={skillThree === 0 ? 'skill-item-3' : 'skill-item-3-animate'}>CSS</li>
                    </ul>

                    <pre className='language-jsx'>
                        <code className='language-jsx'>
                            {code}
                        </code>
                    </pre>

                </div>

            </div>
        </div>
        </motion.div>
    );                                              
};

export default PageDetail;

/* 
 export default function App() {   
    const [value, setValue] = useState(0);     
    const animate = () => {
        if (value < 20) {
            setValue(value + 0.01);
            requestAnimationFrame(animate);
        }   
    };   

         useEffect(() => {     
            animate();
        }, [animate]);   
            
            return (    
                <div className="App">
                    <h1>{value}</h1>     
                </div>   ); 
            }
*/