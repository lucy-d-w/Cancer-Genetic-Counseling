import React from "react";
import LearnMore from '../LearnMore';
import { H2 } from "@blueprintjs/core";
import genes from "../Graphics/genes.png";

class LM_5_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="How Genes Cause Cancer" first={true} last={true} audio='LMs/LM5_1_S19.m4a'>
                <div className="Content">
                    <div className="Main-content">
                        <img src={genes} className='Main-graphic'></img>
                    </div>
                </div>
            </LearnMore>
        );
    }
}

export default LM_5_1;

