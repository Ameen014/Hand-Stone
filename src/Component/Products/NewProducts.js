import React, { useState, useEffect } from "react";
import { Helper } from "../../Tools/Helper";
import { api_Routes } from "../../api_Route";
import { Grid, Card, CardMedia, CardContent, Typography, Button, CircularProgress, Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
  import { useSnackbar } from 'notistack';
  import { useNavigate } from 'react-router-dom';

const NewProducts = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setkeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getProduct();
  }, [keyword , selectedCategory , page]);

  const getProduct = async () => {
    setIsLoading(true);

    const { response, message } = await Helper.Get({
      url: api_Routes.product.viewNew + `&keywords=${keyword}&category_id=${selectedCategory}`,
      data:{
        results: 10 ,
        page: page
      },
      hasToken: true,
    });

    if (response) {
      setProducts([]);
      setTotalPages(response.meta.last_page || 1);
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
            quantity:10
          },
        ]);
      });
      setIsLoading(false);
    } else {
      console.log(message);
    }
  };

  const handleQuantityChange = (id, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: parseInt(value) } : product
    ));

  };

  const handleAddToCart = (product) => {

    dispatch(cartActions.addItemToCart(product))

    enqueueSnackbar("أضيف المنتج الى السلة  ",{variant:"success",anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }})
  };

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  return (
    <Box p={4} bgcolor="#f7f7f7">
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (<>
        <Typography  sx={{ fontSize: "28px", fontWeight: "700", color: "#333" ,fontFamily:"Cairo",margin:"30px 0" }}>جديدنا  :</Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={product.photo}
                  alt={product.name}
                  sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 , cursor:"pointer" }}
                  onClick={()=>{ navigate(`/product/${product.id}`)}}

                />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography
                      sx={{ fontSize: "18px", fontWeight: "700", color: "#333" ,fontFamily:"Cairo" }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        fontFamily:"Cairo",
                        color: "#888",
                      }}
                    >
                      {product.category_name}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography  sx={{fontSize: "17px",fontWeight: "600",color: "#888",fontFamily:"Cairo"}}> {product.size} سم</Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color="black"
                      fontFamily={"Cairo"}
                    >
                       {product.price} ل.س
                    </Typography>
                  </Box>
                 
                <Box display="flex" justifyContent="space-between" alignItems={"center"}  pt={2}>
                    <Button
                        variant="contained"
                        sx={{
                        marginTop:"10px",
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
                        onClick={() => handleAddToCart(product)}
                    >
                    أضف إلى السلة
                  </Button>
                    <TextField
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={5} display="flex" justifyContent="center">
            <Pagination
              size="large"
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>

        </> )}
    </Box>
  );
};

export default NewProducts;
