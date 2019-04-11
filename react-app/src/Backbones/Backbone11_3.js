import React from "react";
import Backbone from '../Backbone';
import fam from '../Graphics/fam.png'

class Backbone11_3 extends React.Component {
    render() {
        return (

            <Backbone title="What does a positive genetic test result mean?" first={this.props.first} last={this.props.last}>
                   <div className="BB-content">
                    

          
                    <div className="Column Content-box" style={{width: 450, marginLeft: -200}}>
                       <li>Family members may consider genetic testing</li>
                       <li>A positive test result may change their medical care</li>
                    </div>

                    <img src={fam} className='Main-graphic' style={{width: '55vh', marginTop: '5vh', marginRight: -200}}></img>
                   
                </div>
    </Backbone>
        );
    }
}

export default Backbone11_3;