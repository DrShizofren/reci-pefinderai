import { Book, Heart, House, Settings } from 'lucide-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate()
  const params = useLocation()
  console.log(params.pathname);
  
  return <ul className="nav">
    <li><button className={params.pathname === "/" ? 'active' : ''} onClick={() => navigate('/')}><House /></button></li>
    <li><button className={params.pathname === "/favorites" ? 'active' : ''} onClick={() => navigate('/favorites')}><Heart /></button></li>
    <li><button className={params.pathname === "/info" ? 'active' : ''} onClick={() => navigate('/info')}><Book /></button></li>
    <li><button className={params.pathname === "/settings" ? 'active' : ''} onClick={() => navigate('/settings')}><Settings /></button></li>
  </ul>
}

export default Navigation