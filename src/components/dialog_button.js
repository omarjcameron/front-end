import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import OrgCard from './org_card';

const customContentStyle = {
  width: '90%',
  height: '90%'
};

const styles = {
  raisedButton: {
    'margin-right': '10px'
  }
};

class DialogButton extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Learn More" onTouchTap={this.handleOpen} style={styles.raisedButton} />
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <OrgCard />
        </Dialog>
      </div>
    );
  }
}

export default DialogButton;