import React from "react";
import Backbone from '../Backbone';

class Backbone8 extends React.Component {
    render() {
        return (
            <Backbone title="Hereditary Cancers and Medical Care">
                <div className="BB-content">
                    <div className="Column Content-box">
                        <strong>Find cancer risk gene</strong>
                        <div className="Graphic" style={{width: "15vw"}}></div>
                    </div>
                    <div className="Column Content-box">
                        <strong>Identify types of cancer</strong>
                        <div className="Graphic" style={{width: "15vw"}}></div>
                    </div>
                    <div className="Column Content-box">
                        <strong>Provide better medical care</strong>
                        <li>Cancer prevention</li>
                        <li>Early detection</li>
                        <li>Cancer treatment</li>
                    </div>
                        
                </div>
            </Backbone>
        );
    }
}

export default Backbone8;