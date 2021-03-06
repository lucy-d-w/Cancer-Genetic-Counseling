import React from 'react';
import Quiz from '../Quiz';


class Quiz9 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="9" audio='Questions/Q9_S36.m4a' question="If you are the first person in your family to have genetic testing for inherited cancer risk, there are only two possible test results:
                &#13;&#10;1. positive - a gene change is found that may increase cancer risk
                &#13;&#10;2. negative - no gene changes are found">
            </Quiz>
        );
    }
}

export default Quiz9;