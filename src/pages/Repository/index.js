import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { WebViewMain } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').full_name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }),
  };

  render() {
    const html_url = this.props.navigation.getParam('repository').html_url;
    console.tron.log(html_url);
    return <WebViewMain source={{ uri: html_url }} />;
  }
}
