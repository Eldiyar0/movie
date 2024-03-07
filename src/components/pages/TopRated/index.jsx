import { useEffect, useState } from "react";
import axios from "axios"
import { api_key } from "../../../ApiKey";
import MovieCard from "../MovieCard";

const TopRated = () => {
    const [top, setTop] = useState([])
    function getTop() {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
        .then(res => {
            console.log(res);
            setTop(res.data.results)
        })
    }
    console.log(top);
    useEffect(() => {
        getTop()
    }, [])
    return (
        <div id="movie">
            <div className="container">
                <div className="movie">
                    {
                        top.map(el => <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default TopRated