import React from "react";
import Backbone from '../Backbone';
import LearnMore from '../LearnMore';

class LM_12_1 extends LearnMore {
    render() {
        return (
            <Backbone title="Variants of Uncertain Significance (VUS)" first={true} last={true} audio='LMs/LM12_1_S42.m4a'>
                <div className="Content">
                   
                    <div className={"Main-content Content-box"}>
                        <li>VUS results are common when testing many genes at one time.</li>
                        <li>Most VUS results are reclassified as negative as we learn more about them.</li>
                    </div>
                   
                </div>    
            </Backbone>
        );
    }
}

export default LM_12_1;