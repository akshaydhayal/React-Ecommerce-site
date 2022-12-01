import React from "react";
import './Categories.scss';

const Categories=()=>{
    return (
      <div className="categories">
        <div className="left">
          <div className="left1">
            <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </div>
          <div className="left2">
            <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </div>
        </div>

        <div className="center">
          <div className="center3">
            <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="right-top1">4</div>
            <div className="right-top2">5</div>
            {/* <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" /> */}
          </div>
          <div className="right-down">
            <div className="right-down">6</div>
            {/* <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" /> */}
          </div>
        </div>
      </div>
    );
}

export default Categories;