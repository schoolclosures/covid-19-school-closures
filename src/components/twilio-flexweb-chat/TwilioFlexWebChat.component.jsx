import React, { Component } from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

const appConfig = {
  accountSid:"ACf874236bf536e5cd1d40af8f4c31a30e",
  flexFlowSid:"FO403541bac301f708c44e4fd3a22a6f93",
};

class TwilioFlexWebChat extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    
    FlexWebChat.Manager.create(appConfig)
      .then(manager => this.setState( { manager } ))
      .catch((error) => this.setState( { error } ));     
  }

  render() {
    const { manager, error } = this.state;

    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      )
    }

    return null;
  }
};

export default TwilioFlexWebChat;
