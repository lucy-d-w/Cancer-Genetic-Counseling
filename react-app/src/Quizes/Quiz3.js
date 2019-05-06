import React from 'react';
import Quiz from '../Quiz';


class Quiz3 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="3" audio='Questions/Q3_S18.m4a' question="The sister or brother of a person with an inherited cancer gene mutation usually has a 50% chance of having the same mutation." />
        );
    }
}

export default Quiz3;