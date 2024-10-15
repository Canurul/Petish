import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/headerTags/About'
import Products from './pages/headerTags/Products';
import Contact from './pages/headerTags/Contact';
import Links from './pages/headerTags/Links';



function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='Hakkımızda' element={<About/>} />
       <Route path='Ürünler' element={<Products/>} />
       <Route path='İletişim' element={<Contact/>} />
       <Route path='Linkler' element={<Links/>} />

      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
