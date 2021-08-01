import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import pic from "../picture/emoji.png"
//For rounded emoji image for the intro class 
export default class App extends Component{
    render(){
        return(
        <div style={{display:"flex"}}>
          <ReactRoundedImage 
          image={pic} alt ="emoji.png" 
          roundedSize="10" imageWidth="150" 
          imageHeight="150"/>
        </div>
    );
    }
}
