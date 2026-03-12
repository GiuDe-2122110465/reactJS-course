import React from "react";

class DisplayInfo extends React.Component {
 render ( )
 {
    const {lisUser} = this.props;
    console.log(lisUser)
    return (
        <div> 
            {lisUser.map((user)=>{
                return (
                    <div key={user.id}>
                        <hr />
                        <div>my name is {user.name}</div>
                        <div>my age is {user.age}</div>
                        <div>my Address is {user.address}</div>
                        <hr />
                    </div>
                    
                )
            })}
            {/* <div>my name is {name}</div>
            <div>my age is {age}</div>
            <div>my Address is HCM</div> */}

        </div>
    )
 }

}

export default DisplayInfo