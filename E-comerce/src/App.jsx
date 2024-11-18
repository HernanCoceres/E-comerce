import './App.css'
import ItemListContainer from './ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
