import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component 
{
   state ={
    lisUser:[
            {id:1,name:'giu de',address:'HCM'},
            {id:2,name:'giu de 1',address:'VN'},
            {id:3,name:'giu de 2',address:'USA'}

    ]
   }
    render()
    {
        //DRY
        return (
            <div>
                
               
            <UserInfo></UserInfo>
    
            <DisplayInfo 
                lisUser={this.state.lisUser} 
            />
            </div>
        );

    }
}
export default MyComponent;