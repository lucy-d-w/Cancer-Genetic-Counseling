import React from "react";
import LearnMore from '../LearnMore';
import { H2 } from "@blueprintjs/core";

class LM_8_3 extends LearnMore {
    render() {
        return (
            <LearnMore title="Hereditary Colorectal Cancer" first={true} last={true} audio='LMs/LM8_2_S32.m4a'>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H2>Inherited Cancer Gene</H2>
                        <li>MLH1</li>
                        <li>MSH2</li>
                        <li>MSH6</li>
                        <li>PMS2</li>
                        <li>EPCAM</li>
                    </div>
                    <div className="Column Content-box">
                        <H2>Types of Cancer Risk</H2>
                        <li>Colon</li>
                        <li>Uterine</li>
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

export default LM_8_3;