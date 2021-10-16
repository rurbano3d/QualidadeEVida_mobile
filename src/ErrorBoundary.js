import React, { Component } from 'react';
import { Text } from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <Text>Some Error Spotted here!</Text>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
