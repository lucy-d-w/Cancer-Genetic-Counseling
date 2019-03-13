import React from "react";
import './Backbone.css';
import { Card, H1, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'


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

    showOverlay = e => {
        e.preventDefault();
        this.setState({ isOpen: true, scrollPosition: window.pageYOffset });

        return false;
    }

    closeOverlay = e => {
        e.preventDefault();
        this.setState({ isOpen: false });
        window.scrollTo(0, this.state.scrollPosition);
        return false;
    }

    scrollDown() {
        window.scrollBy(0, 1.0115 * window.innerHeight);
    }

    scrollUp() {
        window.scrollBy(0, -1.011 * window.innerHeight);
    }

    render() {
        return (
            <div>
                {!this.props.first &&
                    <button className="Arrow" onClick={this.scrollUp}>
                        <img src={up_arrow} />
                    </button>}
                {this.props.first &&
                    <button className="Arrow" onClick={this.scrollUp} style={{ visibility: 'hidden' }}>
                        <img src={up_arrow} />
                    </button>}
                <Card className="BB-body">
                    <H1 className="BB-header">{this.props.title}</H1>
                    <div className="Content">{this.props.children}</div>
                </Card>
                {!this.props.last &&
                    <button className="Arrow" onClick={this.scrollDown}>
                        <img src={down_arrow} />
                    </button>}
                {this.props.last &&
                    <button className="Arrow" onClick={this.scrollDown} style={{ visibility: 'hidden' }}>
                        <img src={down_arrow}/>
                    </button>}
            </div>
        );
                    }
                                        
    
}

export default Backbone;