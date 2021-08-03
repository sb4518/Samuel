import React from "react"; 


export default function FadeInSection(props){
    const [isVisible, setVisible] = React.useState(false); 
    const domRef = React.useRef(); 
    React.useEffect(()=> {
        const observing = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));

        });
        observing.observe(domRef.current);
    }, []);

    return (
        <div
        className = {`fade-in-section ${isVisible ? "is-visible" : ""}` }
        style = { { transitionDelay: `${props.delay}`}}
        ref = {domRef}
        >
            {props.children}
        </div>


    );
    
}