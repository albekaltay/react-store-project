import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import Footer from './components/Footer';



function App() {
  return (
  <> 
  <Navbar></Navbar>
  <div style={{ background:"#0e387a", color:"#9fafca", padding:"5% 10% 5% 10%",display:"flex",flexDirection:"row"}}>

  <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      
      </Routes>
</div>
  <Footer></Footer>
  </>
  );
}

export default App;
