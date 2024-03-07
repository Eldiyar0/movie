import axios from "axios"
import { api_key } from "../../../ApiKey"
import React, { useEffect, useState } from "react"
import MovieCard from "../MovieCard"

const Popular = () => {
    const [page, setPage] = useState(1)
    const [popular, setPopular] = useState([])
    function getPopular() {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)
        .then(res => {
            console.log(res);
            setPopular(res.data.results)
        })
    }
    console.log(popular);
    useEffect(() => {
        getPopular()
    }, [popular])
    return (
        <div id="movie">
            <div className="container">
                <div className="movie">
                    {
                        popular.map(el => <MovieCard el={el}/>)
                    }
                    <div className="btns">
                    <button onClick={() => {
                        setPage(page > 1 ? page - 1 : page)
                    }}>back</button>
                    <button onClick={() => {
                        setPage(page ? page + 1 : page)
                    }}>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popular