import React from "react";
import Backbone from '../Backbone';
import fam from '../Graphics/fam.png'

class Backbone12_3 extends React.Component {
    render() {
        return (
            <Backbone title="What about a variant of uncertain significance (VUS) or negative result?" first={this.props.first} last={this.props.last}>
                
                <div className="BB-content">
                    

          
                    <div className="Column Content-box" style={{width: 450, marginLeft: -200}}>
                       <li>In many cases, testing of other family members will not be useful</li>
                       <li>Medical care for family members is guided by personal and family history</li>
                    </div>

                    <img src={fam} className='Main-graphic' style={{width: '55vh', marginTop: '5vh', marginRight: -200}}></img>
                   
                </div>

            </Backbone>
        );
    }
}

export default Backbone12_3;
