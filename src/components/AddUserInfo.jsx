import React, { useState } from "react";


// class UserInfo extends React.Component {
//      state ={
//         name:'giu de',
//         age: 22,
//         address:'hcm',
//     }
 
//     handMouseOver(event)
//     {
//         console.log(event.pageX)
//     }
//     handleOnchangeInput=(event)=> {
//         this.setState({
//             name: event.target.value,
            
//         })
//     }
//     handleOnchangeInputAge=(event)=> {
//         this.setState({
//             age: event.target.value,
            
//         })
//     }
//     handleOnchangeInputAddress=(event)=> {
//         this.setState({
//             address: event.target.value,
            
//         })
//     }
//     HandleOnSubmit = (event) =>
//     {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.HandleAddNewUser({
//             id: Math.floor((Math.random()*100) - 1) + ' random',
//             name:this.state.name,
//             age:this.state.age,
//         })
//     }
//     render() 
//     {
//         return (
            
//             <div>
//                 component child
//                 my name is {this.state.name}
//                 <form onSubmit={(event)=>this.HandleOnSubmit(event)}>
//                     <span>your name</span>
//                      <input type="text" value={this.state.name}  onChange={()=>this.handleOnchangeInput(event)} />
//                         <br />
//                     <span>your age</span>
//                      <input type="text" value={this.state.age}  onChange={()=>this.handleOnchangeInputAge(event)} />
//                         <br />
//                     <span>your address</span>

//                      <input type="text" value={this.state.address}  onChange={()=>this.handleOnchangeInputAddress(event)} />
//                      <br />
//                      <button>submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


const UserInfo = (props)=>{
    const [name,SetName] = useState ('giude')
    const [age,SetAge] = useState (22)
    const [Address,SetAddress] = useState ('hcm')

   const  handMouseOver = (event)=>
    {
        console.log(event.pageX)
    }
    const handleOnchangeInput=(event)=> {
        SetName(event.target.value)
    
    }
   const handleOnchangeInputAge=(event)=> {
    SetAge( event.target.value)
    }
    const handleOnchangeInputAddress=(event)=> {
        SetAddress(event.target.value)
 
    }
  const  HandleOnSubmit = (event) =>
    {
        event.preventDefault();
        console.log(name,age,Address)
        SetName()
        SetAge()
        SetAddress()


         props.HandleAddNewUser({
             id: Math.floor((Math.random()*100) - 1) + ' random',
            name:name,
            age:age,
        })

  
    }
  
        return (
            
            <div>
                component child
                my name is {name} my age is : {age}
                <form onSubmit={(event)=>HandleOnSubmit(event)}>
                    <span>your name</span>
                     <input type="text" placeholder={name}  onChange={(event)=>handleOnchangeInput(event)} />
                        <br />
                    <span>your age</span>
                     <input type="text" placeholder={age}  onChange={(event)=>handleOnchangeInputAge(event)} />
                        <br />
                    <span>your address</span>
                     <input type="text" placeholder={Address}  onChange={(event)=>handleOnchangeInputAddress(event)} />
                     <br />
                     <button>submit</button>
                </form>
            </div>
        )
}

export default UserInfo