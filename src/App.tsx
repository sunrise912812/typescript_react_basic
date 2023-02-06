import {Routes, Route} from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { Navigations } from './components/Navigationts'

function App() {
  return(
  <>
  <Navigations/>
  <Routes>
    <Route path="/" element={<ProductsPage/>} />
    <Route path="/about" element={<AboutPage/>} />
  </Routes>
  </>
  )
}

export default App;
