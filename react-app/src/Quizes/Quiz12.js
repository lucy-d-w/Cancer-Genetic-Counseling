import React from 'react';
import Quiz from '../Quiz';


class Quiz12 extends Quiz {
    render() {
        return (
            <Quiz user={this.props.user} num="12" question="It is more common to find variants of uncertain significance (VUS) as more genes are tested.">
            </Quiz>
        );
    }
}

export default Quiz12;