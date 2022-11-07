import {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { motion } from 'framer-motion';

const Works = () => {
    //takes care of all posts
    const [posts, setPosts] = useState([]);

    //Takes care of posts being rendered
    const [postLoaded, setPostLoaded] = useState(false);

    //Takes care of all the posts that fall under the current category 
    const [filter, setFilter] = useState([]);

    //Takes care of determining which category is selected (0) is the default and is === to all categories
    const [activeFilter, setActiveFilter] = useState(0);

    //Path to all posts from my live wordpress site using the REST API
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/posts?_embed';
    
    //Fetching the data from the rest API
    //Sets all posts
    //Sets all posts under specified category
    //Sets the filter for the category specified
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
      //Filter component called in and specified states passed in as props
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
            <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
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