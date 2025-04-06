import { useParams } from "react-router-dom"
import { useAppSelector } from "../Hooks"

const Favdetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const favorites = useAppSelector((state) => state.favorite.value)
  const fav = favorites.find((elem) => elem.id === id)  
  if (!fav) {
    return <p>Favorite not found.</p>;
  }
  return <>
    <h1>{fav.name.slice(0,1).toUpperCase() + fav.name.slice(1.)}</h1>
    <p>{fav.howtocook}</p>
  </>
}

export default Favdetails 