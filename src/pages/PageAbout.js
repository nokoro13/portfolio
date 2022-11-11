// Page - Home

import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

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
            console.log(data);
        })
    }, [restPath]);

    return (
        <div className='home-header'>
            <>
            { postLoaded ?
            <>
                <h1 className='home-title'>{aboutPage.title.rendered}</h1>
                <div className="home-content" dangerouslySetInnerHTML={{__html:aboutPage.content.rendered}}>
                    
                </div>
                <div className='home-image-container'>

            
                
                </div>
            </>
        : 
            <Loading />
        }
        </>
            </div>
    );

};

export default PageAbout;