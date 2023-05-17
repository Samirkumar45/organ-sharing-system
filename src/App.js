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
import HospitalSignUp from './components/HospitalSignUp';
import HospitalLogin from './components/HospitalLogin';
import Donar from './components/Donar';
import DonarLogin from './components/DonarLogin';
import PrivateComp from './components/privatecomp';
import ListData from './components/ListData';
import ListData2 from './components/ListData2';
import Contact from './components/contact';
// import contact from './components/contact';
// import Contact from './components/contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Header1 />} /> */}
          {/* <Route index element={<Navbar />} /> */}
          {/* <Route index element={<Header1 />} /> */}
          <Route element={<PrivateComp />}>
            <Route path='Abouts' element={<Abouts />} />
            <Route path='list' element={<ListData />} />
            <Route path='list2' element={<ListData2 />} />
            <Route path='contact' element={<Contact />} />
          </Route>

          <Route path='/' element={<Header1 />} />
          <Route path='Signin1' element={<Signin1 />} />
          <Route path='SignUp1' element={<SignUp1 />} />
          <Route path='HospitalSignUp' element={<HospitalSignUp />} />
          <Route path='HospitalLogin' element={<HospitalLogin />} />
          <Route path='Donar' element={<Donar />} />
          <Route path='DonarLogin' element={<DonarLogin />} />
        </Routes>
      </BrowserRouter>
      {/* <Header1 /> */}
      <Footer1 />
      {/* <Route path='/' element={<Footer1/>}/> */}
    </div>
  );
}

export default App;
