import React from 'react';
import Quiz from '../Quiz';


class Quiz7 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="7" audio='Questions/Q7_S28.m4a' question="Genetic testing for inherited cancer risk is not usually helpful when a person already has cancer." />
        );
    }
}

export default Quiz7;