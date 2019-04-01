import React from 'react';
import Backbone from './Backbone';
import { Classes, Checkbox, Button, Intent } from "@blueprintjs/core";


class TrackQuiz extends Backbone {
    render() {
        return (
            <Backbone title="Customize Your Experience" first={true} last={true}>
                <div className="BB-content">
                    <div className='Main-content'>
                        <div className="Form Content-list">
                            <label>Select the reason you were referred for genetic risk assessment:</label>
                            <div style={{ margin: '3vh' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <Checkbox id="t1" label="Indication 1:  Someone in my family already tested positive for a gene mutation" />
                                    <Checkbox id="t2"label="Indication 2:  I have a cancer diagnosis and genetic testing could help guide my treatment" />
                                    <Checkbox id="t3"label="Indication 3:  I had a tumor test which showed that I might have an inherited form of cancer" />
                                    <Checkbox id="t4" label="Other" />{/*General????*/}
                                </div>
                            </div>
                            {/*<div>
                                <label style={{marginRight: '2vw'}}>ID:</label>
                                <textarea className={Classes.INPUT} />
                            </div>*/}
                            <Button intent={Intent.PRIMARY} large={true} onClick={this.scrollDown}>Submit</Button>
                        </div>
                         </div>
                </div>
            </Backbone>
        );
    }
}

export default TrackQuiz;