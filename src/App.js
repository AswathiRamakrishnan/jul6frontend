import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Aboutus from './components/aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/404';

function App() {
return (
<>
<Navbar />
<BrowserRouter>
<Routes>
<Route path="/" element={<></>}></Route>

<Route path="/register" element={<Register />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/calculator" element={<Calculator />}></Route>
<Route path="/aboutus" element={<Aboutus />}></Route>
<Route path="/*" element={<Error />}></Route>




  </Routes>
</BrowserRouter>
<Footer />
</>
  );
  }

export default App;
