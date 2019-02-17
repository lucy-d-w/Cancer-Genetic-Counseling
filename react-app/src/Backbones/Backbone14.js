import React from "react";
import Backbone from '../Backbone';
import { H4 } from "@blueprintjs/core";


class Backbone14 extends React.Component {
    render() {
        return (
            <Backbone title="Genetic Information Nondiscrimination Act (GINA)">
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H4>Covers:</H4>
                        <li>Health insurers cannot use genetic information to set costs of deny coverage.</li>
                        <li>Employers cannot use your genetic information.</li>
                    </div>
                    <div className="Column Content-box">
                        <H4>Does not cover:</H4>
                        <li>Supplemental insurance such as life, disability, and long-term care.</li>
                        <li>Military health insurance</li>
                        <li>Tip*: Get supplemental insurance policies in place before genetic testing.</li>

                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone14;
