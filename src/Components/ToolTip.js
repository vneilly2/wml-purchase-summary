import React, { Component } from "react";

class ToolTip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.handleToggleToolTip = this.handleToggleToolTip.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleToggleToolTip() {
    this.setState({
      displayTooltip: !this.state.displayTooltip
    });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log("Enter pressed");
    }
  }
  render() {
    let { toolTipMessage, toolTipPosition } = this.props;
    console.log("from ToolTip: ", this.props);
    return (
      <span
        className="tooltip-trigger"
        onClick={this.handleToggleToolTip}
        onKeyDown={this.handleKeyPress}
        role="button"
        tabIndex="0"
      >
        {this.props.children}
        <span className="tooltip" onMouseLeave={this.handleToggleToolTip}>
          {this.state.displayTooltip && (
            <div className={`tooltip-bubble tooltip-${toolTipPosition}`}>
              <div className="tooltip-message">{toolTipMessage}</div>
            </div>
          )}
        </span>
      </span>
    );
  }
}

export default ToolTip;
