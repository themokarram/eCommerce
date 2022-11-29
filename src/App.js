import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import {Provider} from 'react-redux'
import Store from './store/Store';


function App() {
  return (
     <>
 <Provider store={Store}>
 <BrowserRouter>
    <Navbar/>
 <Routes>
   <Route path='/' element={<Home/>}></Route>
  <Route path='/Cart' element={<Cart/>}></Route>
 </Routes>

</BrowserRouter>
 </Provider>

    </>
  );
}

export default App;
