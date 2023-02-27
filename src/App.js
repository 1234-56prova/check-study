import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Page/Header/Header';

import Home from './Page/Home/Home';
import Studyform from './Page/Studyform/Studyform';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/study-form' element={<Studyform/>}></Route>
      </Routes>

    </div>

  );

}

export default App;

