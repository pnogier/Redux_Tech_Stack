import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './Common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.item.title}
        </Text>
      </CardSection>
    );
  };
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
