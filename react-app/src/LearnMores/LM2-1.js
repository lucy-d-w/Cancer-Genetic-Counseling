import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";

class LM_2_1 extends React.Component {
    render() {
        return (
            <LearnMore title="Causes of Cancer" first={true} last={true}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H4>Sporadic</H4>
                        <li>Most cancers</li>
                        <li>General population risk to develop cancer</li>
                    </div>
                    <div className="Column Content-box">
                        <H4>Hereditary</H4>
                        <li>Shared genetic and environmental risk factors</li>
                        <li>Cancer risk is higher than general population risk </li>
                    </div>
                    <div className="Column Content-box">
                        <H4>Familial</H4>
                        <li>Single genetic risk factor</li>
                        <li>Cancer risk is very high regardless of lifestyle or environment</li>
                    </div>

                </div></LearnMore>
        );
    }
}

export default LM_2_1;