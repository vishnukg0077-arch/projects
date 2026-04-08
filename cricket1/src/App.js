import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PlayerDetails from './pages/PlayerDetails';
import players from './data/players';
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Login setIsLogin={setIsLogin} />} />

        <Route path='/signup' element={<SignUp />} />

        <Route
          path='/home'
          element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
        />

        <Route path='/player/:id' element={<PlayerDetails players={players} />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
