import {useState, useEffect} from 'react';
import Loading from '../components/Loading';

const Works = () => {

    const [posts, setPosts] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/posts?_embed';
  
    useEffect(() => {
        fetch(restPath)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
            setPostLoaded(true);
        })
    }, [restPath]);

    return (
      
      <>
      { postLoaded ?
      <>
        {posts.map(post => 
          <section key={post.id} className='work-container'>
          <h1 className="work-title">{post.title.rendered}</h1>
          <div className="work-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>
          </div>
          </section>
          )}
      </>
  : 
      <Loading />
  }
  </>
 
      );
    
};

export default Works;