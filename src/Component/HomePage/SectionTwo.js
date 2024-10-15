import React from 'react';  
import SectionTwoPhoto from "../../assets/تصميم-بدون-عنوان-5.png"; // Ensure the path is correct  

const SectionTwo = () => {  
    return (  
        <div className="container">  
            <div className="text-container">  
                <h1 className="title">خصائص الحجر الصناعي</h1>  
                <ul className="list">  
                    <li className="list-item">الحجر الصناعي يعطي شكل جمالي، ويتميز بأقل من مثيلاته من الحجر.</li>  
                    <li className="list-item">يحتوي على مواد كيميائية بنسب مختلفة لتقوية قطعة الحجر.</li>  
                    <li className="list-item">درجة انضغاط الماء تأكد أن تكون معدومة: 15% - 3%.</li>  
                    <li className="list-item">الاستنزار المربع من الحجر الصناعي يتراوح ضغطه بين 5-7 ن/م².</li>  
                    <li className="list-item">مقاوم للعوامل الطبيعية.</li>  
                </ul>  
            </div>  
            <div className="image-container">  
                <img   
                    src={SectionTwoPhoto}   
                    alt="Building"   
                    className="image"   
                />  
            </div>  
        </div>  
    );  
};  

export default SectionTwo;