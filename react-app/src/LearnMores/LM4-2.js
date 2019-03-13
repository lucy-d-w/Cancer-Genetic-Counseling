import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import chart from '../Graphics/lm4-2-chart.png'

class LM_4_2 extends React.Component {
    render() {
        return (
            <LearnMore title="Genes:  Our Bodies' Instructions" first={true} last={true}>
                <div className="BB-content">
                    <div className="Content-list">
                        <img src={chart} style={{ width: '40vw', marginLeft: '22vw' }} /> {/* align this better*/}
                        <div className="Row">
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

                </div></LearnMore>
        );
    }
}

export default LM_4_2;