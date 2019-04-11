import React from 'react';
import Quiz from '../Quiz';


class Quiz5 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="5" question="Some people with an inherited cancer gene mutation will never get cancer." />
        );
    }
}

export default Quiz5;