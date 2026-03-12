import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component 
{
   state ={
    lisUser:[
            {id:1,name:'giu de',age: "15"},
            {id:2,name:'giu de 1',age: "16"},
            {id:3,name:'giu de 2',age: "17"},
            {id:4,name:'giu de 3',age: "27"},
            {id:5,name:'giu de 4',age: "26"},
            {id:6,name:'giu de 5',age: "22"}


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