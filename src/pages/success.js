import React from "react";
import { NavLink } from "react-router-dom";
import { useRouter } from "next/router";


const Success = () => {
    return (
        <div>
            <div id="banner">
            <div id="banner-content">
            FREEFOOD@NOW
            </div>
            </div>
            <div id="main-content" style={{marginTop: '100px'}}>

                <div style={{backgroundColor: '#CBF9E0', width: '50vw', margin: 'auto', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '1rem', marginBottom: '1rem', borderRadius: '15px'}}>
                    <h1>
                    Thanks for sharing!
                    </h1>
                    
                </div>
                <NavLink to="/" activestyle="true">
                <div id="fourth" className="myButton">
                    Back to Free Food 
                </div>
                </NavLink>

                <NavLink to="/submission" activestyle="true">
                <div id="fourth" className="myButton">
                    Back to Submission Form 
                </div>
                </NavLink>
            </div>
        </div>
    )

}

export default Success;