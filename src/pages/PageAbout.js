// Page - Home

import { useEffect } from 'react';


const PageAbout = () => {

    useEffect(() => {
		
	}, []);

    return (
        <section className='about-wrapper'>
            <div className='about-header'>
             <h2>About Page</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
             <pre className='language-jsx'>
                <code className='language-jsx'>{`
                    useEffect(() => {
        const timeout = setTimeout(handleSkills, 1000);
        return () => {
            clearTimeout(timeout);
        }
      });
    `}</code>
             </pre>
            </div>
        </section>
    );

};

export default PageAbout;