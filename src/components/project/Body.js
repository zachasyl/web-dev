import React from "react";
import travel from './travel.jpeg'

const Body = () => {

    return(

            <div className="big-border-2">
                <div className = "row mt-2">
                    <div className = "col-2">
                    </div>
                    <div className="col-8">
                        <img src={travel} alt="travel" className="main-page-image"/>;
                    </div>
                    <div className="col-2">
                    </div>
                </div>

            </div>
    )
}

export default Body;