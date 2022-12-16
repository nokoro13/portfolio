import { useEffect } from "react"
import Prism from 'prismjs';

const Snippet = ({code, code2, language, id, pageid}) => {

    //Var out side of conditions because all code being displayed is all JS
    language = 'javascript';

    //Match the returned id to the proper code
    if(id === 27) { //27 === Moovy
        code = 
        `- PageHome.js ->

const PageHome = () => {

    const [favs, setFavs] = useState( localStorage.getItem('MY_FAVOURITE_MOVIES')===  null ? []:
    JSON.parse(localStorage.getItem('MY_FAVOURITE_MOVIES') ) );
    const [favIds] = useState(favs.map((fav) => fav.id));

    useEffect(() => {
        document.title = 'Home';
        fetch(https://api.themoviedb.org/3/movie/?api_key=b474f43311f1a19783cd84ac384af0e8)
        .then((res) => res.json()).then((data) => {
            console.log(data);
            setMovies(data.results.slice(0,12));
        })
    }, [param]);

    useEffect(() => {
        window.localStorage.setItem('MY_FAVOURITE_MOVIES', JSON.stringify(favs));
        console.log(favs);
    }, [favs]);
};
export default PageHome`;
code2 = `- PageFavourites.js ->

const PageFavorites = () => {

    const [favMov, setFavMov] = useState([]);

    function handleDelete(id){
        const list = [...favMov];
        const updateFavs = list.filter(fav => fav.id !== id);
        setFavMov(updateFavs);
        console.log(updateFavs);
        localStorage.setItem('MY_FAVOURITE_MOVIES', JSON.stringify(updateFavs));
    }

    //localStorage.removeItem('MY_FAVOURITE_MOVIES')

    const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';
    
    useEffect(() => {
		document.title = 'Favorites';
        const favMov = localStorage.getItem('MY_FAVOURITE_MOVIES')  === null ? [] : JSON.parse(localStorage.getItem('MY_FAVOURITE_MOVIES'));
        console.log(favMov);
        setFavMov(favMov);
	}, []);
};
export default PageFavourites`;
    } else {

        if(id === 49) {
            code =  ``;
            code2 = ``;
        } else {

            if(id === 1) {
                code = 
                `- Filter.js ->

import { useEffect } from "react";

function Filter( {setActiveFilter, activeFilter, setFilter, posts} ) {
                
    useEffect(()=> {
        if(activeFilter === 0) {
            setFilter(posts);
            return;
        }   
        const filtered = posts.filter((post) => post.categories.includes(activeFilter));
        setFilter(filtered);
        // eslint-disable-next-line
    }, [activeFilter])
                
        return(
            //OnClick sets the activeFilter's state to the appropiate category
            //Works page then maps over the filter and displays the appropriate posts
            <div className="filter-work">
                <button className={activeFilter === 0 ? 'active' : ''}
                onClick={()=> setActiveFilter(0)}>All</button>
                
                <button className={activeFilter === 3 ? 'active' : ''}
                onClick={()=> setActiveFilter(3)}>React</button>
                
                <button className={activeFilter === 1 ? 'active' : ''}
                onClick={()=> setActiveFilter(1)}>Wordpress</button>
            </div>
        )
    }
                
export default Filter;`;
    code2 = 
    `- Works.js ->

const Works = () => {
    //takes care of all posts
        const [posts, setPosts] = useState([]);

    //Takes care of posts being rendered
        const [postLoaded, setPostLoaded] = useState(false);

    //Takes care of all the posts that fall under the current category 
        const [filter, setFilter] = useState([]);

    //Takes care of determining which category is selected (0) is the default and is === to all categories
        const [activeFilter, setActiveFilter] = useState(0);

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
                
              <h1 className="work-title">{post.title.rendered}</h1>
              <article className="work-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>
                
              </article>
              <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
              <Link className="more-info" to={'detail/{post.slug}'} state={{title: post.title.rendered, content: post.content.rendered, id: post.id}} >
                  <p>More Info...</p>
              </Link>
              
              
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

export default Works;`;
    
            } else { 
            if ( id === 5) {
                code = `- App.js ->
import './App.css';
import { useState } from 'react';
import { Cal } from './Cal';
                
const App = () => {
    const [val, setValue] = useState('');
    //clear the current input you have just entered (C)
    const clear = () => {
        try {
            setValue(val.slice(0, -1))
        } catch (error) {
        }
    }
    //clear all memory on the calc (AC)
        const clearAll = () => {
        setValue('');
        }
                
        //safe eval (=)
        const calculate = (event) => {
        event.preventDefault();
        let result = Cal(val);
        setValue(result);
        } 
                
        return (
        <div className="calc-app">
                    
            <div className="calc-output">
            <div className="display">{ val.length < 1 ? '0' : {val} }</div>
            </div>
                
            <button value="AC" id="delete-btn" className="big-button" onClick={()=> clearAll()}>AC</button>
            <button value="C" id="delete-btn" onClick={()=> clear()}>C</button>
            <button value="/" type="operator" className="symbol" onClick={((e)=> setValue(val + e.target.value))}>&divide;</button>
            <button value="7" onClick={(e)=> setValue(val + e.target.value)}>7</button>
            <button value="8" onClick={(e)=> setValue(val + e.target.value)}>8</button>
            <button value="9" onClick={(e)=> setValue(val + e.target.value)}>9</button>
            <button value="*" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>&times;</button>
            <button value="4" onClick={(e)=> setValue(val + e.target.value)}>4</button>
            <button value="5" onClick={(e)=> setValue(val + e.target.value)}>5</button>
            <button value="6" onClick={(e)=> setValue(val + e.target.value)}>6</button>
            <button value="-" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>-</button>
            <button value="1" onClick={(e)=> setValue(val + e.target.value)}>1</button>
            <button value="2" onClick={(e)=> setValue(val + e.target.value)}>2</button>
            <button value="3" onClick={(e)=> setValue(val + e.target.value)}>3</button>
            <button value="+" type="operator" className="symbol" onClick={(e)=> setValue(val + e.target.value)}>+</button>
            <button value="0" className="zero" onClick={(e)=> setValue(val + e.target.value)}>0</button>
            <button value="=" type="operator"className="equals" onClick={calculate}>=</button>
                
        </div>
        );
    }
                
    export default App;`;
    code2 = ``;
            } else {
                if (id === 219) {
                    code = ``;
                    code2 = ``;
                } else {
                    if (id === 207) {
                        code = ``;
                        code2 = ``; 
                    }
                }
            }
        }
    }
}

    useEffect(()=> {
        Prism.highlightAll();
    },[]);

    return (
        <>

        <h3 className="code-title">{id === 1 ? 'Filtering' : '' || id === 27 ? 'Setting and Getting Local Storage | Favourites' : '' || id === 5 ? 'Calculator' : ''}</h3>
        <pre>
            <code children={code} className={code !== '' ? `language-${language}` : ''}/>
            <p className={code === '' ? 'hide-copy' : "copy-clipboard"} onClick={() => {navigator.clipboard.writeText(code)}}>Copy</p>
        </pre>
        
        <h3 className="code-title">{id === 1 ? 'Filtering Continued' : '' || id === 27 ? 'Local Storage continued' : ''}</h3>
        <pre>
            <code children={code2} className={code2 !== '' ? `language-${language}` : ''}/>
            <p className={code2 === '' ? 'hide-copy' : "copy-clipboard"} onClick={() => {navigator.clipboard.writeText(code2)}}>Copy</p>
        </pre>
        </>

    )
}

export default Snippet;