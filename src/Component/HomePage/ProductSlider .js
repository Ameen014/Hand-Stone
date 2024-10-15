import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { Helper } from "../../Tools/Helper";
import { api_Routes } from "../../api_Route";


const ProductSlider = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust to how many items you want to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Slider will move every 3 seconds
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    return (
        <div className="slider-container">
            {isLoading ? (
                <Typography>Loading...</Typography>
            ) : (
                <Slider {...settings}>
                    {products.map((product) => (
                        <Box key={product.id} className="product-card">
                            <img
                                src={product.photo}
                                alt={product.name}
                                className="product-image"
                            />
                            <Typography fontSize={19} fontWeight={600} color='black' fontFamily={"Cairo"} mb={1}mt={1}>
                                {product.name}
                            </Typography>
                            <Typography fontSize={16} fontWeight={500} color='#666' fontFamily={"Cairo"} mb={1}>
                                {product.category_name}
                            </Typography>
                            <Typography fontSize={16} fontWeight={500} color='#666' fontFamily={"Cairo"} >
                                {product.price} ل.س
                            </Typography>
                        </Box>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default ProductSlider;
