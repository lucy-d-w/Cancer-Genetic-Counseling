import React from "react";
import LearnMore from '../LearnMore';
import chart from '../Graphics/lm5-2-chart.png'

class LM_5_2 extends LearnMore {
    render() {
        return (
            <div style={{overflow:'hidden'}}>
                <LearnMore title="How Genes Cause Cancer" first={true} last={false}> {/*FIX!!!!*/}
                    <div className="BB-content">
                        <div className="Main-content" style={{ textalign: 'center' }}>
                            <div className="Main-graphic-wrap">
                                <img src={chart} className='Main-graphic'></img>
                            </div>
                        </div> 
                    </div>
                </LearnMore>
                <LearnMore title="How Genes Cause Cancer" first={false} last={true}> {/*FIX!!!!*/}
                    <div className="BB-content">
                        <div className="Main-content" style={{ textalign: 'center' }}>
                            <div className="Main-graphic-wrap">
                                <img src={chart} className='Main-graphic'></img>
                            </div>
                        </div>
                    </div>
                    </LearnMore>
                </div>
        );
    }
}

export default LM_5_2;