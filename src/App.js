import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Page/Header/Header';

import Home from './Page/Home/Home';


function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>

        <Route path='/' element={<Home></Home>}/>

      </Routes>

    </div>

  );

}

export default App;

