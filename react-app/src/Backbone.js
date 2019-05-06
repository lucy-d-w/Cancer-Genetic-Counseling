import React from "react";
import './Backbone.css';
import { Card, H1 } from "@blueprintjs/core";
import dis_down_arrow from './Graphics/down-arrow2.png'
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'


import VisibilitySensor from "react-visibility-sensor"
import { isBoolean } from "util";
import { setTimeout } from "timers";


class Backbone extends React.Component {
    state = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: false,
        enforceFocus: true,
        isOpen: false,
        usePortal: true,
        scrollPosition: 0,
        locked: true,
        selection: '',
        down: dis_down_arrow,

    };

    audio_path = './Audio/'
    

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
        window.scrollBy(0, window.innerHeight);
    }

    scrollUp() {
        window.scrollBy(0, -1 * window.innerHeight);
    }

    unlock = () => {
        this.setState({ locked: false, down: down_arrow });
    }

    componentDidMount = () => {
        if (typeof this.props.audio !== 'undefined') {
        } else {
            this.setState({locked: false})
        }
    }

    onVisible = (isVisible) => {
        if (typeof this.props.audio !== 'undefined') {
            if (isVisible) {
                console.log(this.props.title + " is visible")
                const path = this.audio_path + this.props.audio;
                var audio = new Audio();
                audio.preload = "metadata";

                import(`${path}`)
                    .then(aud => {
                        audio.src = aud.default;
                    })
                audio.load();
                audio.play();
                audio.onloadedmetadata = () => {
                    var time = audio.duration * 1000;
                    setTimeout(this.unlock, time);
                };
            } else {
                /*this.audio.pause();*/
            }
        }
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onVisible}>
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
                            <button className="Arrow" onClick={this.scrollDown} disabled={this.state.locked || (this.props.needAnswer== true)}>
                            <img id="down" src={this.state.down} />
                        </button>}
                    {this.props.last &&
                        <button className="Arrow" onClick={this.scrollDown} style={{ visibility: 'hidden' }}>
                            <img src={down_arrow}/>
                        </button>}
                    </div>
            </div>
            </VisibilitySensor>
        );
                    }
                                        
    
}

export default Backbone;