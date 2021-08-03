import React from "react"; 
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection"; 


class Credits extends React.Component{
    constructor(){
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this); 
    }
    handleSelect(eventKey){
        this.setState({
            activeKey: eventKey
        }); 
    }



    render(){
        return (
            <FadeInSection>
                <div id="credit">
                    <div className = "end-credits">
                        <div>Built by Samuel Barobhuiya</div>
                    </div>
                </div>
            </FadeInSection>
        );
    }

}
export default Credits; 





