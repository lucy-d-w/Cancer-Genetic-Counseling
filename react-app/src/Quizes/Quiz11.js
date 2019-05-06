import React from 'react';
import Quiz from '../Quiz';


class Quiz11 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="11" audio='Questions/Q11_S45.m4a' question="Testing can find a gene mutation that is unexpected or does not fit
            with the pattern of cancers in a person's family.">
            </Quiz>
        );
    }
}

export default Quiz11;