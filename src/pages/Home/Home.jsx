import React from 'react'
import Slider from "../../components/Slider/Slider.jsx";
import FeaturedProdcuts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Categories from '../../components/Categories/Categories.jsx';
import Contact from '../../components/Contact/Contact.jsx';


const Home = () => {
    return(
        <div>
            <Slider/>
            <FeaturedProdcuts type="Featured"/>
            <FeaturedProdcuts type="Trending"/>
            {/* <Categories/> */}
            <Contact/>
        </div>
    )
}
export default Home;