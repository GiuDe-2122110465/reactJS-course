import React from "react";
class MyComponent extends React.Component 
{
    state ={
        name:'giu de',
        age: 22,
        address:'hcm',
    }
    handleClick(event)
    {
        alert('click cc')
    }
    handMouseOver(event)
    {
        console.log(event.pageX)
    }
    render()
    {
        return (
            <div>
                my name is {this.state.name}
                <button onClick={this.handleClick}>click vào đây</button>
                <button onMouseOver={this.handMouseOver}>di chuột vào đây</button>

            </div>
        );

    }
}
export default MyComponent;