import React, { useEffect, useState } from 'react';

const Footer = () => {
    
    const [foot, setFoot] = useState(true);
    const handleFooter = () => {
        if(window.scrollY>10) {
            setFoot(false)
        } else {
            setFoot(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleFooter)
        return () => {
            window.removeEventListener('scroll', handleFooter)
        }
    }, [])
    
    return (
    <div className={foot === false ? 'footer-hide' : 'footer'}>
        <nav>
            <ul>
                <li><a href='https://github.com/nokoro13' target='_blank'>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/noah-kondra-ross-93193122b/' target='_blank'>LinkedIn</a></li>
                <li><a href='mailto:noahkondraross1330@gmail.com?subject=nokoro web dev' target='_blank'>Email</a></li>
            </ul>
        </nav>
    </div>
    )
};

export default Footer;