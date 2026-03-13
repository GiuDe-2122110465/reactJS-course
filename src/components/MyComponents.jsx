import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
 
// const MyComponent =()=>{
// state ={
//     lisUser:[
//             {id:1,name:'giu de',age: "15"},
//             {id:2,name:'giu de 1',age: "16"},
//             {id:3,name:'giu de 2',age: "17"},
//             {id:4,name:'giu de 3',age: "27"},
//             {id:5,name:'giu de 4',age: "26"},
//             {id:6,name:'giu de 5',age: "22"}


//     ]
//    }
//    HandleAddNewUser = (userObj)=>{
//     console.log('check',userObj)
//     this.setState({
//         lisUser:[userObj,...this.state.lisUser]
//     })
//    }
//    HandleDeleteUser=(UserId)=> {
//     let lisUserClone = this.state.lisUser;
//     lisUserClone = lisUserClone.filter(item=>item.id !== UserId )
//     this.setState({
//       lisUser: lisUserClone  
//     })
//    }
//     render()
//     {
//         //DRY
//         return (
//             <>
//                 <AddUserInfo  HandleAddNewUser = {this.HandleAddNewUser}/>
//                 <DisplayInfo 
//                     lisUser={this.state.lisUser} 
//                     HandleDeleteUser={this.HandleDeleteUser}
//                     />
//             </>
            
//         );

//     }
// }


const MyComponent = (props)=>{
    const [listUser,SetListUser] = useState(
        [
            {id:1,name:'giu de',age: "15"},
            {id:2,name:'giu de 1',age: "16"},
            {id:3,name:'giu de 2',age: "17"},
            {id:4,name:'giu de 3',age: "27"},
            {id:5,name:'giu de 4',age: "26"},
            {id:6,name:'giu de 5',age: "22"}


        ]
    )
     
   const HandleAddNewUser = (userObj)=>{
    SetListUser([userObj,...listUser])//v
   }
   const HandleDeleteUser=(UserId)=> {
    let lisUserClone = listUser;
    lisUserClone = lisUserClone.filter(item=>item.id !== UserId )
    SetListUser( lisUserClone  )//v
   }
    return (
         <>
                <AddUserInfo  HandleAddNewUser = {HandleAddNewUser}/>
                <DisplayInfo 
                    lisUser={listUser} 
                    HandleDeleteUser={HandleDeleteUser}
                    />
            </>
    )
}
export default MyComponent;