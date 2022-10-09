import React from "react";
import aboutimg from "../images/10-Reasons.webp"

export default function About (){
    return(
        <div id="about">
            <div className="about-image">
                <img src={aboutimg} alt="" />
            </div>
            <div className="about-text">
                <h1>learn more about us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, tenetur. Nam rerum sint doloremque culpa. Hic, asperiores. Sint ipsum distinctio deleniti adipisci veritatis asperiores ipsa enim alias harum reprehenderit? Nam.</p>
            <button>read more</button>
            </div>
        </div>
    )
}