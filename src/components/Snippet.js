import { useEffect } from "react"
import Prism from 'prismjs';

const Snippet = ({code, language, id}) => {

    //Var out side of conditions because all code being displayed is all JS
    language = 'javascript';

    //Match the returned id to the proper code
    if(id === 27) { //27 === Moovy
        code = 
        `- Page Home ->

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
}, [favs]);`;
    } else {

        if(id === 49) {
            code =  `Your Snippets are working`;
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
            }
        }
    }

    useEffect(()=> {
        Prism.highlightAll();
    },[]);

    return (
        <pre>
            <code children={code} className={`language-${language}`}/>
            <p className="copy-clipboard" onClick={() => {navigator.clipboard.writeText(code)}}>Copy</p>
        </pre>

    )
}

export default Snippet;