import React from "react";
import LearnMore from '../LearnMore';
import { H2, H4 } from "@blueprintjs/core";
import environment from "../Graphics/environment.png";
import both from "../Graphics/both.png";
import genetic from "../Graphics/genetic.png";

class LM_2_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="Causes of Cancer" first={true} last={true} audio='LMs/LM2_1_S11.m4a'>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H2>Sporadic</H2>
                        <li>Most cancers</li>
                        <li>General population risk to develop cancer</li>
                        <img src={environment} className='Graphic' style={{ marginTop: '13vh', width: '20vh' }}></img> {/*FIX FORMATTING*/}
                    </div>
                    <div className="Column Content-box">
                        <H2>Hereditary</H2>
                        <li>Shared genetic and environmental risk factors</li>
                        <li>Cancer risk is higher than general population risk </li>
                        <img src={both} className='Graphic' style={{ marginTop: '5vh', width: '25vh' }}></img>
                    </div>
                    <div className="Column Content-box">
                        <H2>Familial</H2>
                        <li>Single genetic risk factor</li>
                        <li>Cancer risk is very high regardless of lifestyle or environment</li>
                        <img src={genetic} className='Graphic' style={{ width: '25vh' }}></img>
                    </div>

                </div>
            </LearnMore>
        );
    }
}

export default LM_2_1;