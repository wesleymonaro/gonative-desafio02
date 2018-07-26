import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class IssueItem extends Component {
  state = {};

  // static propTypes = {
  //   repository: PropTypes.shape({
  //     name: PropTypes.string,
  //   }).isRequired,
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func.isRequired,
  //   }),
  // };

  render() {
    const { issue } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(issue.html_url)}>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.repoTitle}>
            {
              (issue.title.length > 24)
                ? `${issue.title.substring(0, 24)}...`
                : issue.title
              }
          </Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {issue.user.login}
            </Text>
          </View>
        </View>

        <View style={styles.iconBox}>
          <Icon name="ios-arrow-forward" size={20} />
        </View>

      </TouchableOpacity>
    );
  }
}

export default IssueItem;
