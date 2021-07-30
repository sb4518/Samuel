import React from "react";
import FadeInsection from "./FadeInSection"; 

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

        const three = (
            <p>

            </p>
        );
        //add in descending order 
        const desc_items = [one,two];
    
        //Add constant coding languages 
        // [];
        const coding_language = [
            "Python",
            "Java", 
            "C++",
            "C",
            "React.js"
        ];
        

        return(
            <div id = "about">
                <FadeInsection>
                    <div className = "section-header">
                        <span className = "section-title"> aboout me </span>
                    </div>
                    <div className = "about-content">
                        <div className = "about-description">
                            {desc_items}
                            {"Some coding languages I have been working with as of now:"}
                            <ul className = "coding_language">
                                {coding_language.map(function (items, i) {
                                    return(
                                        <FadeInsection delay = {`${i+1}00ms`}>
                                            <li>{coding_language}</li>
                                        </FadeInsection>
                                    ); 
                                })}
                            </ul>
                        </div>
                        
                    </div>
                </FadeInsection>
            </div>
        );
    
    
    }



    //
}




export default About; 