import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './pages/Mainpage';
import Singleblog from './pages/Singleblog';




function App() {
  return (
 <> 

 <Router>
 <Routes>
<Route path='/' Component={Mainpage} />
  <Route path='/a' Component={Singleblog}/>
</Routes>
</Router>

 </>
  );
}

export default App;
