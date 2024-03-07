import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import {RiAdminLine} from "react-icons/ri"
const Header = ({value, setValue, clock, setClock}) => {
    const navigate = useNavigate()
    function getUrl () {
        navigate(`search-movie`)
    }
    return (
        <header>
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                    <div className="search">
                        <input onChange={(event) => {
                            setValue(event.target.value)
                        }} type="text" placeholder="Search.."/>
                        <button onClick={() => getUrl()}>search</button>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/popular">Popular</Link>
                        <Link to="/top_rated">Top rated</Link>
                        <Link to="/now_playing">Now playing</Link>
                        <Link to={"/modal"}><RiAdminLine/></Link>
                    </nav>
                    </div>
                </div>
        </header>
    )
}
export default Header