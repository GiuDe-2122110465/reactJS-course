import React, { useEffect, useState } from "react";
import '../components/DisplayInfor.scss'
import react from "../assets/react.svg";
// class DisplayInfo extends React.Component {
  
//  render ( )
//  {
//     const {lisUser} = props;
//     console.log("check map user",lisUser)
//     return (
//         <div className="display-infor-container">
//             <img src={react} alt="" />
//             <div>
//                 <button onClick={()=>{HandleShowHide()}}>
//                     {(state.isShowListUser===true) ? 'ẩn user' : 'hiện user'}
//                 </button>
//             </div>
//             {true && 
//                 <div> 
//                     {lisUser.map((user)=>{
//                         return (
//                             <div key={user.id} className={+user.age>18 ? "green" : "red"}>
//                                 <hr />
//                                 <div  >my name is: {user.name}</div>
//                                 <div>my age is: {user.age}</div>
//                                 <button onClick={()=>{
//                                     props.HandleDeleteUser(user.id)
//                                 }}>xóa</button>
//                                 <hr />
//                             </div>
                            
//                         )
//                     })}
//                     {/* <div>my name is {name}</div>
//                     <div>my age is {age}</div>
//                     <div>my Address is HCM</div> */}

//                 </div>}
            
//         </div>
        
//     )
//  }
// }


const DisplayInfo = (props)=>{
    const {lisUser} = props;
    const [IsShowHideListUser,SetIsShowHideListUser]= useState(true);
    const HandleShowHideListUser=()=>{
       SetIsShowHideListUser(!IsShowHideListUser)
    }

    console.log('render');
    useEffect(()=>{
        if(lisUser.length === 0) alert('bạn đã xóa hết user');
        console.log('useeffect')
    },[lisUser])

    return (
        <div className="display-infor-container">
            <img src={react} alt="" />
            <div>
                <button onClick={()=>{HandleShowHideListUser()}}>
                    {IsShowHideListUser ? 'ẩn user' : 'hiện user'}
                </button>
            </div>
            {IsShowHideListUser && 
                <div> 
                    {lisUser.map((user)=>{
                        return (
                            <div key={user.id} className={+user.age>18 ? "green" : "red"}>
                                <hr />
                                <div  >my name is: {user.name}</div>
                                <div>my age is: {user.age}</div>
                                <button onClick={()=>{
                                    props.HandleDeleteUser(user.id)
                                }}>xóa</button>
                                <hr />
                            </div>
                            
                        )
                    })}
                    {/* <div>my name is {name}</div>
                    <div>my age is {age}</div>
                    <div>my Address is HCM</div> */}

                </div>}
            
        </div>
        
    )
 }

 

export default DisplayInfo