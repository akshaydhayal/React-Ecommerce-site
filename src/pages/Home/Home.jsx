import React from 'react'
import Slider from "../../components/Slider/Slider.jsx";
import FeaturedProdcuts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
const Home = () => {
    return(
        <div>
            Home
            <Slider/>
            <FeaturedProdcuts type="Featured"/>
            <FeaturedProdcuts type="Trending"/>
        </div>
    )
}
export default Home;