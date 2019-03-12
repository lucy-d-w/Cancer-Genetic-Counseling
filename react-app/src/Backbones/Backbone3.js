import React from "react";
import Backbone from '../Backbone';
import { Collapse, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import familytree from '../Graphics/family-tree.png'
import world from '../Graphics/world.png'
import group from '../Graphics/group.png'
import person from '../Graphics/person.png'

class Backbone3 extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
            <Backbone title="Signs of Hereditary Cancer" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Side-column">
                        <img src={familytree} className="Graphic"></img>
                        <img src={person} className="Graphic"></img>
                    </div>
                    <div className="Content-list Main-content">
                        <div className="Content-box">Cancer diagnosed young</div>
                        <div className="Content-box">Cancer in multiple family members across generations</div>
                        <div className="Content-box" onClick={this.handleClick}>A person with multiple cancers
                            {/* <Icon icon={IconNames.PLUS}></Icon> */}
                        </div>
                        <Collapse isOpen={this.state.isOpen}>
                            <pre className="Drop-down" >
                                <li>Paired organs</li>
                                <li>Different organs</li>
                            </pre>
                        </Collapse>
                        <div className="Content-box">Certain ethnic backgrounds</div>
                        <div className="Content-box">Some tumor study results</div>
                    </div>
                    <div className="Side-column">
                        <img src={group} className="Graphic"></img>
                        <img src={world} className="Graphic"></img>
                    </div>
                </div>
            </Backbone>
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

export default Backbone3;