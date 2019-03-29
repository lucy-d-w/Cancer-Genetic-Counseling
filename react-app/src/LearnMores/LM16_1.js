import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import map from '../Graphics/map.png'

class LM_16_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="The Cancer Genetic Counseling Process" first={true} last={true}>
                <div className="Content">
                <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={map} className='Main-graphic'></img>
                    </div>
                </div></LearnMore>
        );
    }
}

export default LM_16_1;