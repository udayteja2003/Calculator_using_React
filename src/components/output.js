import React from "react";
import OutputRow from "./outputRow";
const Output = props => {
    return(
        <div>
            <OutputRow value={props.answer} textSize={{fontSie:'20px'}} />
            <OutputRow value={props.user} textSize={{fontSie:'20px'}} />
        </div>
    )
}

export default Output