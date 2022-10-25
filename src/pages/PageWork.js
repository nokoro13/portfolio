// Page - Home

import { useEffect } from 'react';
import Works from '../components/Works';
const PageWork = () => {

    useEffect(() => {
		
	}, []);

    return (
        <div>
        <h1 className='work-heading'>My Projects</h1>
        <div className='work-underline'></div>
            <section className='work-wrapper'>
            
                <Works/>
            
            </section>
        </div>
    );

};

export default PageWork;