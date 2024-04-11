import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import VasagarVattam from './pages/Events/VasagarVattam';


const App = ()=>{
  return (
    <Routes>
      <Route path='/' element ={<HomePage/>} />
      <Route path='vasagar-vattam' element={<VasagarVattam/>}/>
    </Routes>
  )
}


export default App;