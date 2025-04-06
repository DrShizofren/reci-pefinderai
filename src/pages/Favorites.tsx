import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../Hooks"


const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorite.value)
  const navigate = useNavigate()
  return <>
    <h1>Favorites</h1>
    <div className="favoriteswrapper">
      {
        favorites.map(({id,name}) => <button style={{ whiteSpace: "pre-wrap" }} key={id} onClick={() => navigate('/favorites/' + id)} className="favoritebuttons">{name}</button>)
      }
    </div>

  </>
}

export default Favorites