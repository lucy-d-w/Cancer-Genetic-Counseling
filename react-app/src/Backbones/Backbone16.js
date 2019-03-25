import React from "react";
import Backbone from '../Backbone';
import testTube from '../Graphics/testTube.png'

class Backbone16 extends React.Component {
    render() {
        return (
            <Backbone title="What to Expect" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                   
                    <div className={"Main-content Content-box"}>
                        <li>Speak with healthcare provider</li>
                        <li>Review and sign forms</li>
                        <li>Provide a blood/saliva sample for testing</li>
                        <li>Test results usually available within a few weeks</li>
                        <li>These results can help personalize your care</li>
                        <img src={testTube} className='Graphic' style={{width:180, marginTop: -10}}></img>
                    </div>
                   
                </div>    
            </Backbone>
        );
    }
}

export default Backbone16;