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
        //PageWork.js then maps over the filter and displays the appropriate posts
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

export default Filter;