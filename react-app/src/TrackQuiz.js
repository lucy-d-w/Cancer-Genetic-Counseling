import React from 'react';
import Backbone from './Backbone';
import { Classes, Checkbox, Button, Intent } from "@blueprintjs/core";


class TrackQuiz extends Backbone {
    state = {
        selection: '4',
        userID: '0',
    }

    onSubmit = (event) => {
        this.props.history.push('/id/' + this.state.userID + '/track/' + this.state.selection)
    }

    onSelect = (event) => {
        const check = event.target.checked;
        const value = event.target.id;
        this.setState({ selection: value });
    }

    onIDInput = (event) => {
        this.setState({
            userID: event.target.value
        });
    }

    render() {
        return (
            <body id="body">
                <div className="App">
                    <header className="App-header">
                        <Backbone title="Customize Your Experience" first={true} last={true}>
                            <div className="BB-content">
                                <div className='Main-content'>
                                    <div className="Form Content-list">
                                        <label>Select the reason you were referred for genetic risk assessment:</label>
                                        <div style={{ margin: '3vh' }}>
                                            <div style={{ textAlign: 'left' }}>
                                                <Checkbox id="1" onChange={this.onSelect} label="Indication 1:  Someone in my family already tested positive for a gene mutation" />
                                                <Checkbox id="2" onChange={this.onSelect} label="Indication 2:  I have a cancer diagnosis and genetic testing could help guide my treatment" />
                                                <Checkbox id="3" onChange={this.onSelect} label="Indication 3:  I had a tumor test which showed that I might have an inherited form of cancer" />
                                                <Checkbox id="4" onChange={this.onSelect} label="Other" />{/*General????*/}
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ marginRight: '2vw' }}>ID:</label>
                                            <textarea id="user" onChange={this.onIDInput} className = { Classes.INPUT } />
                                        </div>
                                        <Button intent={Intent.PRIMARY} large={true} onClick={this.onSubmit}>Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </Backbone>
                    </header>
                </div>
            </body>
        );
    }
}

export default TrackQuiz;