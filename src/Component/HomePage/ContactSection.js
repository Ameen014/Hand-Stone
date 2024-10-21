import React from 'react';  

const ContactSection = () => {  
    const phoneNumber = "963933680777";  
    const whatsappLink = `https://wa.me/${phoneNumber}`;  

    return (  
        <div className="containersection">  
        <div className='overlaysection'>
            <h1 className="titlesection">هل لديك مشروع بحاجة للحجر الصناعي؟</h1>  
            <h2 className="subtitlesection">قم بالتواصل معنا</h2>  
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">  
                <button className="buttonsection">اتصل بنا</button>  
            </a>  
            <div className="numbersection">رقم الهاتف: {phoneNumber}</div>  
        </div>
        </div>  
    );  
};  

export default ContactSection;