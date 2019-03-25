import React from "react";
import Backbone from '../Backbone';
import LearnMore from '../LearnMore';

class LM_12_2 extends LearnMore {
    render() {
        return (
            <Backbone title="Negative Results" first={this.props.first} last={this.props.last}>
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