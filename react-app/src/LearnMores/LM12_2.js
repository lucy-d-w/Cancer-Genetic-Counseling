import React from "react";
import Backbone from '../Backbone';
import LearnMore from '../LearnMore';

class LM_12_2 extends LearnMore {
    render() {
        return (
            <Backbone title="Negative Results" first={true} last={true} audio='LMs/LM12_2_S43.m4a'>
                <div className="Content">
                   
                    <div className={"Main-content Content-box"}>
                        <li>You may not have a cancer risk gene. If there is a cancer diagnosis, it may be sporadic (not inherited)</li>
                        <li>Current testing identifies most but not all mutations, so a gene mutation may have been present in the tested gene but undetected</li>
                        <li>A mutation may be present in a gene that was not tested</li>
                    </div>
                   
                </div>    
            </Backbone>
        );
    }
}

export default LM_12_2;