// import logo from './logo.svg';
import './App.css';
// import Footer from './components/Footer1';
import Footer1 from './components/Footer1';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header1 from './components/Header1';
// import Signin1 from './components/Signin1';
import Signin1 from './components/Signin1';
import SignUp1 from './components/SignUp1';
import Abouts from './components/Abouts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Header1 />} /> */}
          {/* <Route index element={<Navbar />} /> */}
          {/* <Route index element={<Header1 />} /> */}
          <Route path='Signin1' element={<Signin1 />} />
          <Route path='SignUp1' element={<SignUp1 />} />
          <Route path='Abouts' element={<Abouts />} />
        </Routes>
      </BrowserRouter>
      {/* <Header1 /> */}
      <Footer1 />
      {/* <Route path='/' element={<Footer1/>}/> */}
    </div>
  );
}

export default App;
