import React from "react";
import Featurebox from "./featurebox";
import fimage1 from "../images/1.svg"
import fimage2 from "../images/2.svg"
import fimage3 from "../images/3.svg"
import fimage4 from "../images/4.svg"

export default function Feature(){
    return(
        <div id="features" >
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox image={fimage1} title="weightLifting" />
                <Featurebox image={fimage2} title="Specific Muscle" />
                <Featurebox image={fimage3} title="fFex Your Muscle" />
                <Featurebox image={fimage4} title="Cardio Exercise" />
            </div>
        </div>
    )
}