import {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { motion } from 'framer-motion';

const Works = () => {

    const [posts, setPosts] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    const [filter, setFilter] = useState([]);
    const [activeFilter, setActiveFilter] = useState(0);
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/posts?_embed';
    
  
    useEffect(() => {
        fetch(restPath)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
            setFilter(data);
            setPostLoaded(true);
        })
    }, [restPath]);


    return (
      
      <>
      <Filter posts={posts} setFilter={setFilter} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      { postLoaded ?

        <>
    
      <>
        {filter.map(post => 
          <motion.section transition={{delay:.1, duration: .5}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} key={post.id} className='work-container'>
              <div className='work-card-cover'>
            <h1 className="work-title">{post.title.rendered}</h1>
            <div className="work-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>
            </div>
            <Link className="more-info" to={`detail/${post.id}`} state={{title: post.title.rendered, content: post.content.rendered}}>
                <p>More Info...</p>
            </Link>
            </div>
            
          </motion.section>
          )}
          </>
      </>
  : 
      <Loading />
  }
  </>
 
      );
    
};

export default Works;