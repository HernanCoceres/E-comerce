import '../App.css'
import ItemListContainer from './ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import ItemDetailContainer from './ItemDetailContainer'
import CartContainer from './CartContainer'
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
         <Route path="category/:id" element={<ItemListContainer/>}></Route>
         <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
         <Route path="/CartContainer" element={<CartContainer/>}></Route>
       </Routes>
      </BrowserRouter>
  )
}

export default App
