import {useState, useEffect} from 'react';
import Loading from '../components/Loading';


const Works = () => {

    const [posts, setPosts] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/posts/27?=embed';
  
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
      <section className='work-wrapper'>
      <div className='work-poster'>
      <>
      { postLoaded ?
      <>
          <section className='work-container'>
          <h1 className="work-title">{posts.title.rendered}</h1>
          <div className="work-content" dangerouslySetInnerHTML={{__html:posts.content.rendered}}>
          </div>
          </section>
      </>
  : 
      <Loading />
  }
  </>
      </div>
  </section>
      );
    
};

export default Works;