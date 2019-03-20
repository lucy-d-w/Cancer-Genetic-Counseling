import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import counselingprocess from '../Graphics/counselingprocess.png'

class LM_16_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="Who should be tested first?" first={true} last={true}>
                <div className="Content">
                <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={counselingprocess} className='Main-graphic'></img>
                    </div>
                </div></LearnMore>
        );
    }
}

export default LM_16_1;