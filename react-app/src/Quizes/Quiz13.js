import React from 'react';
import Quiz from '../Quiz';


class Quiz13 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="13" audio='Questions/Q13_S48.m4a' question="Genetic test results in the United States can be used to decide if someone can get health insurance in most cases.">
            </Quiz>
        );
    }
}

export default Quiz13;