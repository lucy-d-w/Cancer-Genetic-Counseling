import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import map2 from '../Graphics/map2.png'

class LM_16_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="The Cancer Genetic Counseling Process" first={true} last={true}>
                <div className="Content">
                <div className="Main-content" style={{textalign: 'center', marginTop: '-1vh', marginLeft: '10vh'}}>
                        <img src={map2} className='Main-graphic'></img>
                    </div>
                </div></LearnMore>
        );
    }
}

export default LM_16_1;