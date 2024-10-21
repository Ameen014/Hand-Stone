import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Screenshot 2024-10-21 125909 (4).png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography, Badge } from "@mui/material";

const Header = ({isCartOpen , toggleCart}) => {
  const location = useLocation();
  const home = ["/", "/Hand-Stone", "/home"].includes(location.pathname);
  const phoneNumber = "+963933680777";  
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const cartQuantity = useSelector(state => state.cart.totalQuantity) 
  
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
      setNavVisible(!navVisible);
  };

  return (
    <div>
      <header className="header" dir="rtl">
        <div className="header-logo">
          <img src={Logo} alt="Hande Stone" />
        </div>

        <nav className={`header-nav ${navVisible ? 'visible' : ''}`}>
          <ul>
            <li><Link className='link' to="/" onClick={()=> {toggleNav()}}>الرئيسية</Link></li>
            <li><Link className='link' to="/Aboutus" onClick={()=> {toggleNav()}}>من نحن</Link></li>
            <li><Link className='link' to="/Products" onClick={()=> {toggleNav()}}>منتجاتنا</Link></li>
            <li><Link className='link' to="/NewProducts" onClick={()=> {toggleNav()}}>جديدنا</Link></li>
            <li><a href={whatsappLink}>تواصل معنا</a></li>
          </ul>
        </nav>

        <Box
          onClick={toggleCart}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "20px",
            padding: "13px 13px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
           
          }}
        >
          {/* Shopping Cart Icon */}
          <Badge 
            badgeContent={cartQuantity} 
            color="primary"
            overlap="rectangular"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#14213d",
                color: "white",
                fontSize: "12px",
                minWidth: "20px",
                height: "20px",
                marginTop:"-5px"
              }
            }}
          >
            <ShoppingCartIcon sx={{ color: "white", fontSize: "28px" }} />
          </Badge>
        </Box>

        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
      </header>

      {
        home &&
      <section className="centered-text">
        <h1> الحجر الصناعي ومستلزمات البناء </h1>
      </section>

      }
    </div>
  );
};

export default Header;
