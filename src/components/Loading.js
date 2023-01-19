import { CircularProgress } from "@mui/material";

const Loading = () => {
    
    return (
        // <img src="Infinity-1.1s-100px.gif" alt="Loading" className="loading" id="loading" />
        <CircularProgress className="loading" size={75} color='inherit'></CircularProgress>
    )

}

export default Loading;