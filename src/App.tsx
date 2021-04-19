import React, { Component } from 'react';
import FixedButton from '@src/components/FixedButton';


export interface AppProps {
    username: string;
    message: string;
    openUrl: string;
}

class App extends Component<AppProps> {
  render() {
    return<div>
      <h2>Hi {this.props.username}, {this.props.message} </h2>
      <FixedButton openUrl={this.props.openUrl}></FixedButton>
    </div>
  }
}

export default App;