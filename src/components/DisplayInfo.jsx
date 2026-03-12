import React from "react";

class DisplayInfo extends React.Component {
    state={
        isShowListUser:true
    }
    HandleShowHide = ()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
 render ( )
 {
    const {lisUser} = this.props;
    console.log("check map user",lisUser)
    return (
        <div>
            <div>
                <span onClick={()=>{this.HandleShowHide()}}>
                    {(this.state.isShowListUser===true) ? 'ẩn user' : 'hiện user'}
                </span>
            </div>
            {this.state.isShowListUser && 
                <div> 
                    {lisUser.map((user)=>{
                        return (
                            <div key={user.id} className={+user.age>18 ? "green" : "red"}>
                                <hr />
                                <div>my name is {user.name}</div>
                                <div>my age is {user.age}</div>
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

}

export default DisplayInfo