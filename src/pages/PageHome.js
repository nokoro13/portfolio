// Page - Home

import { useEffect, useState} from 'react';
import Loading from '../components/Loading';
import { NavLink } from 'react-router-dom';

const PageHome = () => {

    const [homePage, setHomePage] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
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

    return (
        
        <section className='home-wrapper'>
            <div className='home-header'>
            <>
            { postLoaded ?
            <>
                <h1 className="home-title">{homePage.title.rendered}</h1>
                <div className="home-content" dangerouslySetInnerHTML={{__html:homePage.content.rendered}}>
                </div>
                <NavLink to="/work" className={'call-to-action'}>My Work</NavLink>
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