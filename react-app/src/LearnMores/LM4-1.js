import React from "react";
import LearnMore from '../LearnMore';
import dna from '../Graphics/x-double-dna.png'

class LM_4_1 extends LearnMore {
    render() {
        return (
            <LearnMore title="Genes:  Our Bodies' Instructions" first={true} last={true} audio='LMs/LM4_1_S15.m4a'>
                <div className="BB-content">
                    <div className="Column" style={{ width: "25vw", marginTop:'0vh' }}>
                        <div className="LM-Content-box">
                            <p>Cells are the building blocks of our bodies</p>
                        </div>
                        <div className="LM-Content-box">
                            <p>Each cell has two copies of all of our genes</p>
                        </div>
                        <div className="LM-Content-box">
                            <p>Genes are instructions</p>
                        </div>
                    </div>
                    
                    <img src={dna} style={{ width: "15vw", marginTop:'0vh'}}/>
                    
                    <div className="Column" style={{ width: "25vw", marginTop: '0vh' }}>
                        <div className="LM-Content-box">
                            <p>We all have genes that help protect us from getting cancer</p>
                        </div>
                        <div className="LM-Content-box">
                            <p>Someone who inherits a non-working copy will have this in all of their cells</p>
                        </div>
                    </div>

                </div></LearnMore>
        );
    }
}

export default LM_4_1;