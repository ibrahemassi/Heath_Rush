import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes ,Route } from 'react-router-dom';
import { AboutUs, Header, Items ,ContactUs, Missing,Home } from './components' 

function App() {

  return (
    <div style={{
      background: 'linear-gradient(300deg, #f1a7c9, #fff, #f1a7c9)',
      backgroundSize: '180% 180%',
      animation: 'gradient-animation 18s ease infinite'
    }}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Items />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  )
}

export default App
