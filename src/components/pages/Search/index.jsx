import { useEffect, useState } from "react"
import { api_key } from "../../../ApiKey"
import "./search.css"
import axios from "axios"
import MovieCard from "../MovieCard"
const Search = ({value}) => {
    const [search, setSearch] = useState([])
    function getMovieName () {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`)
        .then((res) => {
            console.log(res);
            setSearch(res.data.results)
        })
    }
    useEffect(() => {
        getMovieName()
    }, [value])
    return (
            <div id="movie">
                <div className="container">
                    <div className="movie">
                        {
                            search.map(el => <MovieCard el={el}/>)
                        }
                    </div>
                </div>
            </div>
    )
}
export default Search