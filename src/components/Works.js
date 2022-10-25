import {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const Works = () => {

    const [posts, setPosts] = useState([]);
    const [postLoaded, setPostLoaded] = useState(false);
    const [postCategories, setPostCategories] = useState([]);
    const restPath = 'https://nokoro.ca/portfolio/wp-json/wp/v2/posts?_embed';
    const restPathCategories = 'https://nokoro.ca/portfolio/wp-json/wp/v2/categories?_embed';
  
    useEffect(() => {
        fetch(restPath)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
            setPostLoaded(true);
        })
    }, [restPath]);

    useEffect(()=> {
        fetch(restPathCategories)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPostCategories(data);
            setPostLoaded(true);
        })
    },[restPathCategories]);

    return (
      
      <>
      { postLoaded ?

        <>
        {postCategories.map(category=>
            <section >
                <ul className='work-tabs' key={category.id}>
                    <li>{category.name}</li>
                </ul>
            </section>
        )}
        

      <>
        {posts.map(post => 
          <section key={post.id} className='work-container'>
              <div className='work-card-cover'>
            <h1 className="work-title">{post.title.rendered}</h1>
            <div className="work-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>
            </div>
            <Link className="more-info" to={`detail/${post.id}`} state={{title: post.title.rendered, content: post.content.rendered}}>
                <p>More Info...</p>
            </Link>
            </div>
            <p>{post.categories}</p>
          </section>
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