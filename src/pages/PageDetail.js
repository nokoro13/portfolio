import {useLocation} from 'react-router-dom';
import React from 'react';

export const PageDetail = () => {
    let location = useLocation();
    const {title} = location.state;
    const {content} = location.state; 
     return(
        <div className='detail-wrapper'>
            
            <div className='detail-content'>
                <h2>{title}</h2>
                <figure dangerouslySetInnerHTML={{__html: content}}>
                    
                </figure>
            
                  
               
            </div>
        </div>
     );                                              
};

export default PageDetail;