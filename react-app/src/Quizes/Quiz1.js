import React from 'react';
import Quiz from '../Quiz';


class Quiz1 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="1" question="Most people who get cancer were born with an inherited cancer risk gene that raised their cancer risk." />
        );
    }
}

export default Quiz1;