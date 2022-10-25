// Page - Home

import { useEffect, useState} from 'react';
import Loading from '../components/Loading';
import { NavLink } from 'react-router-dom';

const PageHome = () => {

    const [homePage, setHomePage] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    const [name, setName] =useState(localStorage.getItem('HOME_LOADED') ===  null ? [] :  JSON.parse(localStorage.getItem('HOME_LOADED') ) );
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/pages/9';

    useEffect(() => {
        fetch(restPath)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setHomePage(data);
            setPostLoaded(true);
        })
    }, [restPath]);

    useEffect(()=> {
        window.localStorage.setItem('HOME_LOADED', JSON.stringify(name));
    },[name]);

    return (
        
        <section className='home-wrapper'>
            <div className='home-header'>
            <>
            { postLoaded ?
            <>
                <h1 className='home-title' onMouseEnter={() => setName(true)}>{homePage.title.rendered}</h1>
                <div className={name === true ? 'home-title-2' : 'home-title-3'}></div>
                <div className="home-content" dangerouslySetInnerHTML={{__html:homePage.content.rendered}}>
                </div>
                <NavLink to="/work" className='call-to-action'>My Work</NavLink>
                <NavLink to="/about" className='call-to-action-2'>About</NavLink>
            </>
        : 
            <Loading />
        }
        </>
            </div>
        </section>
    );

};

export default PageHome;