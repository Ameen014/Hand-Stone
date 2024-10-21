import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography ,CircularProgress } from '@mui/material';
import { Helper } from "../../Tools/Helper";
import { api_Routes } from "../../api_Route";
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';


const ProductSlider = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        setIsLoading(true);

        const { response, message } = await Helper.Get({
          url: api_Routes.product.view + `?keywords=&category_id=`,
          hasToken: true,
        });

        if (response) {
          setProducts([]);
          response.data.forEach((elem) => {
            setProducts((prev) => [
              ...prev,
              {
                id: elem.id,
                name: elem.name,
                category_name: elem.category_name,
                photo: elem.photo,
                size: elem.size.name,
                price: elem.size.buy_price,
                quantity: 10
              },
            ]);
          });
          setIsLoading(false);
        } else {
          console.log(message);
        }
      };

    // Swiper settings
    const swiperSettings = {
        modules: [Autoplay, Pagination],
        slidesPerView: 3, // Number of slides to show
        spaceBetween: 30, // Space between slides
        loop: true, // Infinite scrolling
        pagination: { clickable: true },
        autoplay: {
            delay: 3000, // Time between auto scrolls (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        },
    };

    return (
        <Box className="slider-container" sx={{  backgroundColor: '#f7f7f7' }}>
            {isLoading ? (
                <Box display="flex" justifyContent="center" alignItems="center" pt={"50px"} pb={"50px"}>
                  <CircularProgress />
                </Box>
            ) : (
                <Swiper {...swiperSettings}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Box 
                                sx={{
                                    padding: 3,
                                    boxShadow: 3,
                                    transition: "transform 0.3s",
                                    "&:hover": { transform: "scale(1.05)" },
                                    backgroundColor: "white",
                                    textAlign: "center",
                                    cursor:"pointer"
                                }}
                                onClick={()=>{navigate(`/product/${product.id}`)}}
                            >
                                <img
                                    src={product.photo}
                                    alt={product.name}
                                    style={{ width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover" }}
                                />
                                <Typography fontSize={20} fontWeight={600} color="black" fontFamily="Cairo" mt={2} mb={1}>
                                    {product.name}
                                </Typography>
                                <Typography fontSize={16} fontWeight={500} color="#666" fontFamily="Cairo" mb={1}>
                                    {product.category_name}
                                </Typography>
                                <Typography fontSize={16} fontWeight={500} color="#666" fontFamily="Cairo" mb={3}>
                                    {product.price} ل.س
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </Box>
    );
};

export default ProductSlider;
