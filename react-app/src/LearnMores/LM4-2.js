import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import chart from '../Graphics/lm4-2-chart.png'

class LM_4_2 extends LearnMore {
    render() {
        return (
            <LearnMore title="Genes:  Our Bodies' Instructions" first={true} last={true}>
                <div className="Row">
                    <div className="BB-content" style={{ height: '40vh' }}>
                        <div className="Main-content" style={{ textalign: 'center' }}>
                            <div className="Main-graphic-wrap">
                                <img src={chart} style={{ height: '40vh', margin: '2vh 6vw' }}></img> {/*FIX ME*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Row">
                    <div className="H-centered">
                        <div className="Content-box">
                            <p>Genes are inherited from our parents</p>
                        </div>
                        <div className="Content-box">
                            <p>We can inherit a non-working copy (mutation) from either our mother or our father </p>
                        </div>
                        <div className="Content-box">
                            <p>This is called autosomal dominant inheritance </p>
                        </div>
                    </div>
                </div>
                
            </LearnMore >
        );
    }
}

export default LM_4_2;