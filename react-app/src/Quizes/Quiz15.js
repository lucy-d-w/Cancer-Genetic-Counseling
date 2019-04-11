import React from 'react';
import Quiz from '../Quiz';


class Quiz15 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="15" question="There are laws in place in the United States that protect individuals from being discriminated against by supplemental insurance companies (such as life or disability insurance) based on genetic test results.">
            </Quiz>
        );
    }
}

export default Quiz15;