import React from "react";
import Backbone from '../Backbone';
import you from '../Graphics/you.png'

class Backbone11_2 extends React.Component {
    render() {
        return (

            <Backbone title="What does a positive genetic test result mean?" first={this.props.first} last={this.props.last} audio='Backbones/Backbone 11-2.mp3'>

                    <div className="BB-content">
                    
                    <img src={you} className='Main-graphic' style={{width: '55vh', marginTop: '5vh', marginLeft: -200}}></img>
                   
          
                    <div className="Column Content-box" style={{width: 450, marginRight: -200}}>
                       <li>May change cancer screening and risk reduction options</li>
                       <li>If you have cancer, it may change your treatment options</li>
                    </div>

                </div>
            </Backbone>
        );
    }
}

export default Backbone11_2;