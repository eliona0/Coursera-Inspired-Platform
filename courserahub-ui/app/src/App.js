import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import OnlineDegrees from './pages/OnlineDegrees';
import Careers from './pages/Careers';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/online-degrees" element={<OnlineDegrees/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path='*' element={<ErrorPage/>}/> */}
    </Routes>
    {/* dinamike qeto nalt se menaxhohen ne baze te url */}
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
