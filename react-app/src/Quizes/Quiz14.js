import React from 'react';
import Quiz from '../Quiz';


class Quiz14 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="14" audio='Questions/Q14_S49.m4a' question="In most cases, it is against United States' law to use a genetic test result to deny life and disability insurance coverage or raise the cost.">
            </Quiz>
        );
    }
}

export default Quiz14;