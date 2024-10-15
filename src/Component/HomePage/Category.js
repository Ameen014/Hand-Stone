import React from 'react';  
import { Button, Grid, Typography } from '@mui/material';
import floors from "../../assets/floors.png";
import walls from "../../assets/walls.png";
import pillars from "../../assets/pillars.png";
import materials from "../../assets/materials.png";
import paint from "../../assets/paint.png";

const categories = [  
    { name: 'أرضيات', icon: floors },  // Wood or flooring  
    { name: 'جداريات', icon: walls }, // Framed picture for murals  
    { name: 'أعمدة', icon: pillars },   // Classical building for columns  
    { name: 'مواد بناء', icon: materials }, // Hammer for construction materials  
    { name: 'أصبغة', icon: paint },    // Palette for paints  
];

const Category = () => {  
    return (  
        <div className="containercategory">  
            <Grid container spacing={4} sx={{justifyContent: 'center'}} >  
                {categories.map((category, index) => (  
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>  
                        <div className="category-card">  
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