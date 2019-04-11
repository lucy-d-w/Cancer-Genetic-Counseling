import React from 'react';
import Quiz from '../Quiz';


class Quiz8 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="8" question="If a person has a mutation that causes high risks for breast or colon cancer, there is usually nothing they can do about it." />
        );
    }
}

export default Quiz8;