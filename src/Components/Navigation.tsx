import { Book, Heart, House, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate()
  return <ul className="nav">
    <li><button onClick={() => navigate('/')}><House /></button></li>
    <li><button onClick={() => navigate('/favorites')}><Heart /></button></li>
    <li><button onClick={() => navigate('/info')}><Book /></button></li>
    <li><button onClick={() => navigate('/settings')}><Settings /></button></li>
  </ul>
}

export default Navigation