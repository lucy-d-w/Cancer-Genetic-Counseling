import React from 'react';
import Quiz from '../Quiz';


class Quiz10 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="10" audio='Questions/Q10_S41.m4a' question="Finding a variant of uncertain significance (VUS) in a cancer gene will
            usually explain why someone got cancer.">
            </Quiz>
        );
    }
}

export default Quiz10;