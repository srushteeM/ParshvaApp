import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUpScreen from "./screens/SignUpScreen"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <SignUpScreen/>
    );
  }
}

export default App;



