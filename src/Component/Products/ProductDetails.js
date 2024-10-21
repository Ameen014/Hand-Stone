import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CardMedia, Grid , Button , TextField ,CircularProgress } from "@mui/material";
import { Helper } from "../../Tools/Helper";
import { api_Routes } from "../../api_Route";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { useSnackbar } from 'notistack';

const ProductDetails = () => {

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [productCart, setProductCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    setIsLoading(true);

    const { response, message } = await Helper.Get({
      url: api_Routes.product.getOne(productid), 
      hasToken: true,
    });

    if (response) {
      setProduct(response.data); 
      setProductCart({
        id : response.data.id,
        price : response.data.size.buy_price,
        quantity : 10,
        name : response.data.name,
      })
      setIsLoading(false);
    } else {
      console.log(message);
      setIsLoading(false);
    }
  };

  const handleAddToCart = (product) => {

    dispatch(cartActions.addItemToCart(product))

    enqueueSnackbar("أضيف المنتج الى السلة  ",{variant:"success",anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }})
  };

  const handleQuantityChange = (value) => {
    setProductCart({...productCart , quantity : parseInt(value)});
    console.log(productCart)

  };

  if (isLoading || !product) {
    return         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <CircularProgress />
                    </Box>
  }

  return (
    <Box p={4} bgcolor="#f7f7f7">
      {/* Product Information */}
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Cairo", mb: 3 }}>
            {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "#888", fontFamily: "Cairo", mb: 2 }}>
            الفئة   : {product.category_name}
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "Cairo", mb: 2 }}>
            القياس  : {product.size.name} سم
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "Cairo", mb: 2 }}>
            السعر  : {product.size.buy_price} ل.س
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-around" alignItems={"center"}  pt={2} pb={2}>
                    <Button
                        variant="contained"
                        sx={{
                        backgroundColor: "#14213d",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily:"Cairo",
                        px: 3,
                        py: 1,
                        borderRadius: "17px",
                        "&:hover": { backgroundColor: "white",color:"#14213d" },
                        }}
                        onClick={() => handleAddToCart(productCart)}
                    >
                    أضف إلى السلة
                  </Button>
                    <TextField
                        type="number"
                        value={productCart.quantity}
                        onChange={(e) => handleQuantityChange( e.target.value)}
                        sx={{
                        width: "75px",
                        marginTop:"10px",
                        "& input": { textAlign: "center", fontFamily: "Cairo" },
                        }}
                        inputProps={{ min: 1 }}
                        variant="outlined"
                        size="small"
                  />
                 
                </Box>

      <CardMedia
        component="img"
        image={product.photo} 
        alt={product.name}
        sx={{ height: 400, borderRadius: 2, mb: 4 }}
      />

      {/* Multiple Photos */}
      <Typography variant="h5" sx={{ fontFamily: "Cairo", mb: 2 }}>
        صور اضافية
      </Typography>
      <Grid container spacing={2}>
        {product.photos && product.photos.length > 0 ? (
          product.photos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardMedia
                component="img"
                image={photo.url} 
                alt={`Product Photo ${index + 1}`}
                sx={{ height: 200, borderRadius: 2 }}
              />
            </Grid>
          ))
        ) : (
          <Typography mt={2}>لا توجد صور اضافية </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProductDetails;
