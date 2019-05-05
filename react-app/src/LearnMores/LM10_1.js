import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import family from '../Graphics/family.png'

class LM_10_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="Who should be tested first?" first={true} last={true} audio='LMs/LM10_1_S37.m4a'>
                <div className="Content">
                <div className="Main-content" style={{width: '90vh', marginTop: '-5vh'}}>
                        <img src={family} className='Main-graphic'></img>
                    </div>
                </div></LearnMore>
        );
    }
}

export default LM_10_1;