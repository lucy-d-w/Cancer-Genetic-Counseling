import React from "react";
import Backbone from '../Backbone';
import { H4 } from "@blueprintjs/core";


class Backbone14 extends React.Component {
    render() {
        return (
            <Backbone title="Genetic Information Nondiscrimination Act (GINA)" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Column Content-box" style={{width:'30vw'}}>
                        <H4>Covers:</H4>
                        <li>Health insurers cannot use genetic information to set costs of deny coverage.</li>
                        <li>Employers cannot use your genetic information.</li>
                    </div>
                    <div className="Column Content-box" style={{width:'30vw'}}>
                        <H4>Does not cover:</H4>
                        <li>Supplemental insurance such as life, disability, and long-term care.</li>
                        <li>Military health insurance</li>
                        <li>Tip*: Get these insurance policies before testing.</li>

                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone14;
