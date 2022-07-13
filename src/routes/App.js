import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Proyecto from '../containers/Proyecto'
import Home from '../containers/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/proyecto' element={<Proyecto/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
