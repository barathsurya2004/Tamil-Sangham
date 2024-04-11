import {Route,Routes,useLocation} from 'react-router-dom'
import HomePage from './pages/HomePage';
import VasagarVattam from './pages/Events/VasagarVattam';
import { useEffect } from 'react';


const App = ()=>{
  const {pathname}= useLocation();
  // console.log(pathname);
  useEffect(()=>{
    window.scrollTo(0,0);

  },[pathname]);
  return (
    <Routes>
      <Route path='/' element ={<HomePage/>} />
      <Route path='vasagar-vattam' element={<VasagarVattam/>}/>
    </Routes>
  )
}


export default App;