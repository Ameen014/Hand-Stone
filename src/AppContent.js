import React , { useEffect , useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer"
import HomePage from "./Component/HomePage/HomePage";
import Cart from "./Component/Cart/Cart";
import Products from "./Component/Products/Product";
import Aboutus from "./Component/Aboutus/Aboutus";
import NewProducts from "./Component/Products/NewProducts";

function AppContent () {

    const [isCartOpen, setisCartOpen] = useState(false);
    const element = document.querySelector("body")

    const toggleCart = () => {
        setisCartOpen(!isCartOpen);
    };

    useEffect(() => {
        
        if (isCartOpen) {
            element.style.opacity = "0.8";
        } else {
            element.style.opacity = "1";
        }
    }, [isCartOpen]);

    return(<>

        <main className="content">
         <Header isCartOpen ={isCartOpen} toggleCart ={toggleCart} />
         <Cart   isCartOpen ={isCartOpen} toggleCart ={toggleCart}/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Hand-Stone" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/NewProducts" element={<NewProducts/>}/>
            <Route path="/Aboutus" element={<Aboutus/>}/>
          
          </Routes>
          <Footer/>
        </main>

    </>)
}
export default AppContent