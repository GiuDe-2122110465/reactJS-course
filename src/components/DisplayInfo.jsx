import React from "react";

class DisplayInfo extends React.Component {
 render ( )
 {
    const {age,name} = this.props;
    return (
        <div> 
            <div>my name is {name}</div>
            <div>my age is {age}</div>
            <div>my Address is HCM</div>

        </div>
    )
 }

}

export default DisplayInfo