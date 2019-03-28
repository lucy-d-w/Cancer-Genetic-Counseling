import React from "react";
import Backbone from '../Backbone';
import LearnMore from '../LearnMore';

class LM_12_1 extends LearnMore {
    render() {
        return (
            <Backbone title="Variants of Uncertain Significance (VUS)" first={this.props.first} last={this.props.last}>
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