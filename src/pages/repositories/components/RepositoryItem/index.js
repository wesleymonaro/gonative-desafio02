import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Issues', { repository })}>
    <View style={styles.avatarBox}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    </View>

    <View style={styles.infoBox}>
      <Text style={styles.repoTitle}>
        {repository.name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          {repository.owner.login}
        </Text>
      </View>
    </View>

    <View style={styles.iconBox}>
      <Icon name="ios-arrow-forward" size={20} />
    </View>

  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

RepositoryItem.defaultProps = {
  navigation: () => {},
};

export default withNavigation(RepositoryItem);
