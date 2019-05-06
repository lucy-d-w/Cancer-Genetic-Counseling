import React from 'react';
import Quiz from '../Quiz';


class Quiz4 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="4" audio='Questions/Q4_S24.m4a' question="Mutations in some genes raise cancer risks more than mutations in other genes." />
        );
    }
}

export default Quiz4;