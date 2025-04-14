import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../Hooks"


const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorite.value)
  const navigate = useNavigate()
  console.log(favorites);
  
  return <>
    <h1>Favorites</h1>
    <div className="favoriteswrapper">
      {
        favorites.length > 0 ? favorites.map(({ id, name }) => <button
          style={{ whiteSpace: "pre-wrap" }}
          key={id}
          onClick={() => navigate('/favorites/' + id)}
          className="favoritebuttons">
          {name}
        </button>) : <p className="donthave">You don't have any favorites yet</p>
      }
    </div>

  </>
}

export default Favorites