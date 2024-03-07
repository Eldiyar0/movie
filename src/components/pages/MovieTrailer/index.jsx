import axios from "axios";
import { useEffect, useState } from "react";
import { api_key } from "../../../ApiKey";
import { useParams } from "react-router-dom";
const Trailer = () => {
    const [trailer, setTrailer] = useState([])
    const id = useParams()
    console.log(id);
    function getMovieTrailer () {
        axios(
            `https://api.themoviedb.org/3/movie/${id.movieId}?api_key=${api_key}&language=en-US`
        ).then((res) => {
            console.log(res);
            setTrailer(res.data.results)
        })
    }
    useEffect(() => {
        getMovieTrailer()
    }, [])
    return (
        <>
            {trailer.slice(0, 1).map((el) => (
                <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${el.key}?si=${el.id}`}
                title="YouTube video player"
                frameBorder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
                ></iframe>
            ))}
        </>
    )
}
export default Trailer