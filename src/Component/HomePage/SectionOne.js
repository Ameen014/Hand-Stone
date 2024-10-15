import React from 'react';  
import SectionOnePhoto from "../../assets/تصميم-بدون-عنوان-4.png";  

const SectionOne = () => {  
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
                <h1 className="title"> نظرة عامة </h1>  
                <p className="text">  
                    في الأساس يعتبر الحجر الصناعي هو عبارة عن أحجار تم صبها في قوالب معينة وفق خطط وظروف خاصة. تلك القوالب تعمل على تشكيل المواد المستخدمة وتتنوع الألوان والأشكال حسب القالب وحسب المواد الداخلة في التشكيل. وذلك يمكن ملاحظة أن الحجر الصناعي يتميز بالشكل المميز المحدد الذي لا يمكن أن يتكون طبيعياً بحيث تأخذ صانعه الحجر الصناعي وسأستعرضه بأمانته وجودته العالية حسب حسن الجمال الخارجي. يقوم على صناعة كفاءات مدنية حسب الإضافات السنية في كل المقاييس والمساعدات. في علم الفن والعمارة والديكورات والملاعب ونسائيات الزرع في جعل منتجتها تأخذ من الحداثة بين إصالة الماضي في الحجر.  
                </p>  
            </div>  
        </div>  
    );  
};  

export default SectionOne;