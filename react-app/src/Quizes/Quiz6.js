import React from 'react';
import Quiz from '../Quiz';


class Quiz6 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="6" audio='Questions/Q6_S27.m4a' question="Knowing that a person has inherited a high-risk mutation in a cancer gene can change cancer screening or prevention options." />
        );
    }
}

export default Quiz6;