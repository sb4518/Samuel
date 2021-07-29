import React from "react";
import FadeInsection from "./FadeInsection"; 

class About extends React.Component{
    constructor(){
        super(); 
        this.state = {
            expanded: true, 
            activeKey: "1"

        };
        this.handleSelect = this.handleSelect.bind(this);

    }
    handleSelect(evenKey){
        this.setState({
            activeKey: evenKey
        });

    }
    render() {
        const one = (
            <p>
                I am currently studying <b> Computational Mathematics</b> at {" "}
                <b> Rochester Institute Of Technology</b>, with a minor in Computer Science. 
                
            </p>
        );
        const two = (
            <p>

            </p>
        );
    

    }
}




export default About; 