import React from "react";
import LearnMore from '../LearnMore';
import chart from '../Graphics/lm5-3-chart.png'

class LM_5_3 extends LearnMore {
    render() {
        return (
            <LearnMore title="How Genes Cause Cancer" first={false} last={true}> {/*FIX!!!!*/}
                <div className="BB-content">
                    <div className="Main-content" style={{ textalign: 'center' }}>
                        <div className="Main-graphic-wrap">
                            <img src={chart} className='Main-graphic'></img>
                        </div>
                    </div>
                </div>
            </LearnMore>
        );
    }
}

export default LM_5_3;