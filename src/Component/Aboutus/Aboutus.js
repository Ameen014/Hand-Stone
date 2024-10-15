import React from 'react';  
import SectionOnePhoto from "../../assets/rtibLVI7gHJZo2pabexpTx3dVeCAP01eetEsr8pr.jpg";  

const Aboutus = () => {  
    return (  
        <div className="container">  
            <div className="image-container">  
                <img   
                    src={SectionOnePhoto}   
                    alt="Building"   
                    className="image"   
                />  
            </div>  
            <div className="text-container">  
                <h1 className="title"> هاند ستون </h1>  
                <p className="text">  
                لقد حققت هاند ستون لصناعة الحجر الصناعى والحجر الجيري و الديكور الكلاسيكي و الـ GRC منذ تأسيسها مكانة هامة في السوق السوري حيث تعتبر واحدة من أهم الشركات المنتجة والمسوقة للحجر الصناعي و الحجر الجيري و الـ GRC ، والمنتجات الإسمنتية                 </p>  
            </div>  
        </div>  
    );  
};  

export default Aboutus;