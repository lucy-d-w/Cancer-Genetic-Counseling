import React, { Component } from 'react';
import Backbone1 from './Backbones/Backbone1'
import Backbone2 from './Backbones/Backbone2'
import Backbone3 from './Backbones/Backbone3'
import Backbone4 from './Backbones/Backbone4'
import Backbone5 from './Backbones/Backbone5'
import Backbone6 from './Backbones/Backbone6'
import Backbone7 from './Backbones/Backbone7'
import Backbone8 from './Backbones/Backbone8'
import Backbone9 from './Backbones/Backbone9'
import Backbone10 from './Backbones/Backbone10'
import Backbone11_1 from './Backbones/Backbone11_1'
import Backbone11_2 from './Backbones/Backbone11_2'
import Backbone11_3 from './Backbones/Backbone11_3'
import Backbone12_1 from './Backbones/Backbone12_1'
import Backbone12_2 from './Backbones/Backbone12_2'
import Backbone12_3 from './Backbones/Backbone12_3'
import Backbone12_4 from './Backbones/Backbone12_4'
import Backbone13_1 from './Backbones/Backbone13_1'
import Backbone13_2 from './Backbones/Backbone13_2'
import Backbone14 from './Backbones/Backbone14'
import Backbone15 from './Backbones/Backbone15'
import Backbone16 from './Backbones/Backbone16'
import Backbone17 from './Backbones/Backbone17'
import Quiz1 from './Quizes/Quiz1'
import Quiz2 from './Quizes/Quiz2'
import Quiz3 from './Quizes/Quiz3'
import Quiz4 from './Quizes/Quiz4'
import Quiz5 from './Quizes/Quiz5'
import Quiz6 from './Quizes/Quiz6'
import Quiz7 from './Quizes/Quiz7'
import Quiz8 from './Quizes/Quiz8'
import Quiz9 from './Quizes/Quiz9'
import Quiz10 from './Quizes/Quiz10'
import Quiz11 from './Quizes/Quiz11'
import Quiz12 from './Quizes/Quiz12'
import Quiz13 from './Quizes/Quiz13'
import Quiz14 from './Quizes/Quiz14'
import Quiz15 from './Quizes/Quiz15'

import LM_5_2 from './LearnMores/LM5-2'
import LM_5_3 from './LearnMores/LM5-3'


class Track extends React.Component {
    render() {
        const track = this.props.track;
        return (
            <div>
                <Backbone1/>
                <Backbone2/>
                <Quiz1 user={this.props.user} />

                {(track == 4) && <Backbone3 />}

                <Backbone4/>
                <Quiz2 user={this.props.user}/>
                <Backbone5/>
                <Quiz3 user={this.props.user} />

                {/*(track == 1) && <LM10_2/>*/}

                {(track == 3) && <LM_5_2 />}
                {(track == 3) && <LM_5_3 />}

                <Backbone6 />
                <Backbone7/>
                <Quiz4 user={this.props.user}/>
                <Quiz5 user={this.props.user}/>
                <Backbone8/>
                <Quiz6 user={this.props.user}/>
                <Quiz7 user={this.props.user}/>
                <Quiz8 user={this.props.user}/>
                <Backbone9/>
                <Backbone10/>
                <Quiz9 user={this.props.user}/>
                <Backbone11_1></Backbone11_1>
                <Backbone11_2></Backbone11_2>
                <Backbone11_3></Backbone11_3>
                <Backbone12_1></Backbone12_1>
                <Backbone12_2></Backbone12_2>
                <Backbone12_3></Backbone12_3>
                <Backbone12_4></Backbone12_4>
                <Quiz10 user={this.props.user}/>
                <Backbone13_1/>
                <Backbone13_2/>
                <Quiz11 user={this.props.user}/>
                <Quiz12 user={this.props.user}/>
                <Backbone14/>
                <Quiz13 user={this.props.user}/>
                <Quiz14 user={this.props.user}/>
                <Quiz15 user={this.props.user}/>
                <Backbone15/>
                <Backbone16/>
                <Backbone17/>
            </div>
        );
    }
}

export default Track;