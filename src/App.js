import Login from './components/login';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './components/logout';

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout/> : <Login />}
    </div>
  );
}

export default App;
