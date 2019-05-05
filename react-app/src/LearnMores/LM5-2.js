import React from "react";
import LearnMore from '../LearnMore';
import chart from '../Graphics/lm5-2-chart.png'

class LM_5_2 extends LearnMore {
    render() {
        var f = true;
        var l = true;
        if (typeof this.props.first != 'undefined') {
            f = this.props.first;
        }
        if (typeof this.props.last != 'undefined') {
            l = this.props.last;
        }
        return (
            <div style={{overflow:'hidden'}}>
                <LearnMore title="How Genes Cause Cancer" first={f} last={l} audio='LMs/LM5_2_S20.m4a'>
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