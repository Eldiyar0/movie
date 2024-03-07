import { Link } from "react-router-dom"

function MovieCard ({el}) {
    return (
        <Link to={`/movie-detail/${el.id}`}>
        <div className="card">
            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
            <h3>{el.title}</h3>
        </div>
        </Link>
    )
}
export default MovieCard