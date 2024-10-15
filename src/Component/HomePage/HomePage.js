import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import ContactSection from "./ContactSection";
import ProductSlider from "./ProductSlider ";
import Category from "./Category";

const HomePage = () => {


    return(
    <>

        <div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <Category/>
            <ProductSlider/>
            <ContactSection/>

        </div>

    </>)

}
export default HomePage