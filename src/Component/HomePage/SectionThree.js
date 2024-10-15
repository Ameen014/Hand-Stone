import React from 'react';  

const SectionThree = () => {  
    const features = [  
        {  
            title: "ألوان متجانسة وثابتة لا تتأثر بالعوامل الطبيعية المتقلبة",  
            description: "تتميز الألوان بالثبات والجمال.",  
        },  
        {  
            title: "دقة في المقاس والشكل المطلوب وسرعة بنائه",  
            description: "تضمن دقة عالية في التصنيع.",  
        },  
        {  
            title: "امكانية التشكيل الجميل وتنوعه بمختلف الأدوات والألوان",  
            description: "تتيح خيارات تصميم متعددة.",  
        },  
        {  
            title: "الحجر الصناعي عازل للحرارة ومقاوم للرطوبة والعفن",  
            description: "يضمن بيئة صحية ومريحة.",  
        },  
        {  
            title: "مقاومة للخدوش والتآكل",  
            description: "تضمن متانة عالية على مر الزمن.",  
        },  
        {  
            title: "سهولة الصيانة والتنظيف",  
            description: "تحتاج إلى عناية بسيطة للحفاظ على جمالها.",  
        },
    ];  

    return (  
        <div className="containerthree">  
            <h1 className="title">مميزات الحجر الصناعي</h1>  
            <div className="grid">  
                {features.map((feature, index) => (  
                    <div className="card" key={index}>  
                        <h2 className="card-title">{feature.title}</h2>  
                        <p className="card-description">{feature.description}</p>  
                        <div className="card-line"></div>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default SectionThree;