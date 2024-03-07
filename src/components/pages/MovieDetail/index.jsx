import { useEffect, useState } from "react"
import { api_key } from "../../../ApiKey"
import "./detail.css"
import axios from "axios"
import { useParams } from "react-router-dom"
const MovieDetail = () => {
    const [detail, setDetail] = useState({})
    const id = useParams()
    console.log(id);
    function getDetail () {
        axios (`https://api.themoviedb.org/3/movie/${id.movieId}?api_key=${api_key}&language=en-US`)
    .then((res) => {
        console.log(res);
        setDetail(res.data)
    });
    }
    console.log(detail);
    useEffect(() => {
        getDetail()
    }, [])
    let {poster_path, title, overview, vote_average, release_date, backdrop_path} = detail 
    return (
        <div style={{
            background: `url("https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path} no-repeat left/cover")`,
            height: "82vh",
        }} id="detail">
            <div className="conatiner">
                <div className="detail">
                    <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt="" />
                     <div className="detail-left">
                     <h1>{title}</h1>
                     <p>{ overview }</p>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetail