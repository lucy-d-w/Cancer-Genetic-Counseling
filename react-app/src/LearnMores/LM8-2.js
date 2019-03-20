import React from "react";
import LearnMore from '../LearnMore';
import { H2 } from "@blueprintjs/core";

class LM_8_2 extends LearnMore {
    render() {
        return (
            <LearnMore title="Hereditary Breast and Ovarian Cancer:  Men" first={false} last={true}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H2>Inherited Cancer Gene</H2>
                        <li>BRCA1</li>
                        <li>BRCA2</li>
                    </div>
                    <div className="Column Content-box">
                        <H2>Types of Cancer Risk</H2>
                        <li>Breast</li>
                        <li>Prostate</li>
                    </div>
                    <div className="Column Content-box">
                        <H2>Better Medical Care</H2>
                        <li>Early detection</li>
                        <li>Options to reduce cancer risk</li>
                        <li>Treatment considerations</li>
                    </div>

                </div>
            </LearnMore>
        );
    }
}

export default LM_8_2;