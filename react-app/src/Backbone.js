import React from "react";
import './Backbone.css';
import { Card, H1, Icon } from "@blueprintjs/core";
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'

import LM_4_1 from './LearnMores/LM4-1'
import LM_4_2 from './LearnMores/LM4-2'
import LM_5_1 from './LearnMores/LM5-1'
import LM_5_2 from './LearnMores/LM5-2'
import LM_8_1 from './LearnMores/LM8-1'
import LM_8_2 from './LearnMores/LM8-2'


class Backbone extends React.Component {
    state = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: false,
        enforceFocus: true,
        isOpen: false,
        usePortal: true,
        scrollPosition: 0,

    };

    getOverlay = id => {
        return React.createElement(id);
    }

    showOverlay = id => {
        this.setState({ isOpen: true, scrollPosition: window.pageYOffset });
        return false;
    }

    closeOverlay = e => {
        this.setState({ isOpen: false });
        window.scrollTo(0, this.state.scrollPosition);
        return false;
    }

    scrollDown() {
        /*window.scrollBy(0, 1.0115 * window.innerHeight);*/
        window.scrollBy(0, window.innerHeight);
    }

    scrollUp() {
        /*window.scrollBy(0, -1.011 * window.innerHeight);*/
        window.scrollBy(0, -1 * window.innerHeight);
    }

    render() {
        return (
            <div className="Page-wrap">
                <div >
                    {!this.props.first &&
                        <button className="Arrow" onClick={this.scrollUp}>
                            <img src={up_arrow} />
                        </button>}
                    {this.props.first &&
                        <button className="Arrow" onClick={this.scrollUp} style={{ visibility: 'hidden' }}>
                            <img src={up_arrow} />
                            </button>}
                </div>
                <div className="H-centered">
                    <Card className="BB-body">
                        <H1 className="BB-header">{this.props.title}</H1>
                        <div className="Content">{this.props.children}</div>
                    </Card>
                </div>
                <div >
                    {!this.props.last &&
                        <button className="Arrow" onClick={this.scrollDown}>
                            <img src={down_arrow} />
                        </button>}
                    {this.props.last &&
                        <button className="Arrow" onClick={this.scrollDown} style={{ visibility: 'hidden' }}>
                            <img src={down_arrow}/>
                        </button>}
                </div>
            </div>
        );
                    }
                                        
    
}

export default Backbone;