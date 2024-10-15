import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { Box, Typography, Button, IconButton, Modal, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSnackbar } from 'notistack';
import axios from 'axios'; 

const Cart = ({ isCartOpen, toggleCart }) => {
    const { enqueueSnackbar } = useSnackbar();
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    
    // State for Modal
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleRemoveItem = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
        enqueueSnackbar("تم حذف المنتج من السلة", {
            variant: "success",
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }
        });
    };

    const handleChangeQuantity = (id, quantityChange) => {
        dispatch(cartActions.changeItemQuantity({ id, quantityChange }));
    };

    // Generate the WhatsApp message content
    const generateWhatsAppMessage = () => {
        let message = `السلام عليكم، أنا ${userData.name} وأرغب في طلب هذه المنتجات:\n\n`;
        cartItems.forEach(item => {
            message += `- ${item.name} (الكمية: ${item.quantity}, السعر: ${item.totalPrice} ل.س)\n`;
        });
        message += `\nالعدد الكلي: ${totalQuantity}\n`;
        message += `\nالرقم: ${userData.phone}\n`;
        message += `\nالعنوان: ${userData.address}\n`;
        return message;
    };

    // WhatsApp URL with message
    const whatsappNumber = "0938718838";
    const whatsappLink = `https://wa.me/963${whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;


    const handleSendOrder = async () => {
        // Create the order payload similar to the image
        const orderData = {
            _method: "PUT",
            name: userData.name,
            phone: userData.phone,
            address: userData.address,
            items: cartItems.map((item, index) => ({
                id: item.id,
                qty: item.quantity
            }))
        };

        try {
            // Replace this URL with your actual API endpoint
            const response = await axios.post('https://maryapi.laimonah-scc.com/api/orders', orderData);

            if (response.status === 200) {
                enqueueSnackbar("تم إرسال الطلب بنجاح", { variant: "success",
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    } });
                dispatch(cartActions.clearCart())
                handleCloseModal()
            } else {
                enqueueSnackbar("حدث خطأ أثناء إرسال الطلب", { variant: "error" });
            }
        } catch (error) {
            enqueueSnackbar("فشل إرسال الطلب: " + error.message, { variant: "error" });
        }
    };

    return (
        <>
            {isCartOpen && (
                <Box 
                    sx={{
                        backgroundColor: "white",
                        height: "100vh",
                        position: "fixed",
                        width: "300px",
                        zIndex: "1000",
                        top: "0",
                        right: "0",
                        boxShadow: 3
                    }}
                >
                    {/* Cart Header */}
                    <Box 
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "16px",
                            borderBottom: "3px solid #14213d",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>عربة التسوق</Typography>
                        <Button onClick={toggleCart} sx={{ backgroundColor: "white", borderRadius: "50%", border: "2px solid #14213d", minWidth: 0, width:"30px", height:"30px",color:"red" }}>
                            X
                        </Button>
                    </Box>

                    {/* Cart Items */}
                    <Box sx={{ padding: "10px", overflowY: "auto", height: "calc(100vh - 120px)" }}>
                        {cartItems.length === 0 ? (
                            <Typography sx={{ fontSize: "16px", fontWeight: 500, marginTop: "20px" }}>
                                لا توجد منتجات في عربة التسوق.
                            </Typography>
                        ) : (
                            cartItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "10px 0",
                                        borderBottom: "1px solid #eee"
                                    }}
                                >
                                    <Box>
                                        <Typography variant="body1" fontFamily={"Cairo"} sx={{ fontWeight: 600 }}>{item.name}</Typography>
                                        <Typography variant="body2" fontFamily={"Cairo"} sx={{ color: "#888" }}>الكمية: {item.quantity}</Typography>
                                        <Typography variant="body2" fontFamily={"Cairo"} sx={{ color: "#888" }}>السعر الإجمالي: {item.totalPrice} ل.س</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <IconButton
                                                onClick={() => handleChangeQuantity(item.id, -1)}
                                                sx={{ color: "#14213d" }}
                                            >
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography variant="body2" sx={{ margin: "0 10px" }}>{item.quantity}</Typography>
                                            <IconButton
                                                onClick={() => handleChangeQuantity(item.id, 1)}
                                                sx={{ color: "#14213d" }}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <IconButton
                                        onClick={() => handleRemoveItem(item.id)}
                                        sx={{ color: "#ff4d4f" }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))
                        )}
                    </Box>

                    {/* Order via WhatsApp Button */}
                    {cartItems.length > 0 && (
                        <Box sx={{ padding: "10px", textAlign: "center", borderTop: "1px solid #eee" ,marginTop:"-60px"}}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "green",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    fontFamily: "Cairo",
                                    padding: "10px 20px",
                                    borderRadius: "30px",
                                    "&:hover": { backgroundColor: "green" }
                                }}
                                onClick={handleOpenModal}
                            >
                                أكمل الطلبية
                            </Button>
                        </Box>
                    )}
                </Box>
            )}

            {/* Modal for User Information */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 260,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: "8px",
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>أدخل معلوماتك</Typography>

                    <TextField
                        label="الاسم"
                        name="name"
                        fullWidth
                        value={userData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="رقم الهاتف"
                        type="number"
                        name="phone"
                        fullWidth
                        value={userData.phone}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="العنوان"
                        name="address"
                        fullWidth
                        value={userData.address}
                        onChange={handleInputChange}
                        sx={{ mb: 2 }}
                    />

                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Button
                            href={whatsappLink}
                            target="_blank"
                            variant="contained"
                            onClick={handleSendOrder}
                            sx={{
                                backgroundColor: "green",
                                color: "white",
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Cairo",
                                padding: "10px 20px",
                                borderRadius: "30px",
                                "&:hover": { backgroundColor: "green" }
                            }}
                        >
                            إرسال عبر الواتس
                        </Button>
                        <Button sx={{fontSize:"15px",color:"white",fontWeight:"600",fontFamily:"Cario",backgroundColor:"red",borderRadius:"30px",padding:"10px 20px"}} onClick={handleCloseModal}>اغلاق</Button>
                    </Box>


                </Box>
            </Modal>
        </>
    );
};

export default Cart;
