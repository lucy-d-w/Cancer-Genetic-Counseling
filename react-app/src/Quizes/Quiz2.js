import React from 'react';
import Quiz from '../Quiz';


class Quiz2 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="2" audio='Questions/Q2_S14.m4a' question="A change (mutation) in a cancer risk gene can be inherited from a person's father or mother." />
        );
    }
}

export default Quiz2;