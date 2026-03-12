import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component 
{
   
    render()
    {
        return (
            <div>
                
               
            <UserInfo></UserInfo>
            <DisplayInfo name = " giu de 2" age = "222"></DisplayInfo>
            <hr />
            <DisplayInfo name = " giu de 2" age = {333}></DisplayInfo>

            </div>
        );

    }
}
export default MyComponent;