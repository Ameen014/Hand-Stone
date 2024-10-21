import React from 'react';  
import { Button, Grid, Typography } from '@mui/material';
import floors from "../../assets/floors.png";
import walls from "../../assets/walls.png";
import pillars from "../../assets/pillars.png";
import materials from "../../assets/materials.png";
import paint from "../../assets/paint.png";
import { useNavigate } from 'react-router-dom';

const categories = [  
    { name: 'أرضيات', icon: floors  , id : 5 },  // Wood or flooring  
    { name: 'جداريات', icon: walls , id : 1  }, // Framed picture for murals  
    { name: 'أعمدة', icon: pillars , id : 2  },   // Classical building for columns  
    { name: 'مواد بناء', icon: materials , id :3  }, // Hammer for construction materials  
    { name: 'أصبغة', icon: paint , id : 4 },    // Palette for paints  
];

const Category = () => {  

    const navigate = useNavigate();

    return (  
        <div className="containercategory">  
            <Grid container spacing={4} sx={{justifyContent: 'center'}} >  
                {categories.map((category, index) => (  
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>  
                        <div className="category-card" onClick={() => navigate(`/products`, { state: { categoryId: category.id } })}> 
                            <div className="category-icon">
                                <img src={category.icon} style={{maxWidth: '65px'}} />
                            </div>  
                            <h3>{category.name}</h3>
                        </div>  
                    </Grid>  
                ))}  
            </Grid>  
        </div>  
    );  
};  

export default Category;