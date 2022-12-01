import React from "react";
import './FeaturedProducts.scss';
import Card from "../Card/Card";

const FeaturedProducts = (props) =>{
    const data = [
      {
        id: 1,
        img1: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/5/r/m/xl-hood-275-hazesketches-white-lewel-original-imaghueddnv2shmh.jpeg?q=70",
        img2: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/w/f/b/xl-hood-275-hazesketches-white-lewel-original-imaghuedehuu4bkz.jpeg?q=70",
        title: "Men Black T-Shirt",
        isNew: true,
        oldPrice: 800,
        newPrice: 399,
      },
      {
        id: 2,
        img1: "https://rukminim1.flixcart.com/image/832/832/klcmoi80/t-shirt/j/l/f/l-wmn-rn-fs-dgren-camou-zip-maniac-original-imagyhhbgdhwzndu.jpeg?q=70",
        img2: "https://rukminim1.flixcart.com/image/832/832/klcmoi80/t-shirt/n/a/r/l-wmn-rn-fs-dgren-camou-zip-maniac-original-imagyhhbfhpc7b6p.jpeg?q=70",
        title: "Women Green T-Shirt",
        isNew: true,
        oldPrice: 1600,
        newPrice: 699,
      },
      {
        id: 3,
        img1: "https://rukminim1.flixcart.com/image/832/832/knrsjgw0/t-shirt/w/q/0/l-2115-the-dry-state-original-imag2djmgambgwhj.jpeg?q=70",
        img2: "https://rukminim1.flixcart.com/image/832/832/knrsjgw0/t-shirt/g/c/a/l-2115-the-dry-state-original-imag2djmudqx6zcu.jpeg?q=70",
        title: "Men Black T-Shirt",
        isNew: false,
        oldPrice: 1100,
        newPrice: 499,
      },
      {
        id: 4,
        img1: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/5/r/m/xl-hood-275-hazesketches-white-lewel-original-imaghueddnv2shmh.jpeg?q=70",
        img2: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/w/f/b/xl-hood-275-hazesketches-white-lewel-original-imaghuedehuu4bkz.jpeg?q=70",
        title: "Hooded Black T-Shirt",
        isNew: true,
        oldPrice: 700,
        newPrice: 349,
      },
    ];
    return (
      <div className="featured-products">
        <div className="top-container">
          <h1>{props.type} Products</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusamus ipsam sit pariatur totam ducimus, suscipit 
            vitae laboriosam voluptas! Deleniti labore sequi suscipit quisquam earum nobis laborum distinctio animi asperiores.</p>
        </div>
        <div className="bottom-container">
            {data.map((item)=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
      </div>
    );
}
export default FeaturedProducts;