import { useEffect, useState } from "react"
import axios from "axios"
import { api_key } from "../../../ApiKey"
import MovieCard from "../MovieCard"

 const NowPlaying = () => {
    const [now, setNow] = useState([])
    function getNow() {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
        .then(res => {
            console.log(res);
            setNow(res.data.results)
        })
    }
    console.log(now);
    useEffect(() => {
        getNow()
    }, [])
    return (
    <div id="movie">
            <div className="container">
                <div className="movie">
                    {
                        now.map(el => <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default NowPlaying