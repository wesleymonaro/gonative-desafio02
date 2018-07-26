import React from 'react';
import {
  View, TouchableOpacity, TextInput, ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Foundation';

import styles from './styles';

const SearchBox = props => (
  <View style={styles.container}>
    <TextInput
      style={[styles.input, { borderColor: (props.withError) ? 'red' : 'transparent' }]}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Adicionar novo repositório"
      underlineColorAndroid="transparent"
      value={props.text}
      onChangeText={repository => props.changeText(repository)}
    />
    <TouchableOpacity
      onPress={props.buttonAction}
      style={styles.button}
      disabled={props.loading}
    >
      {
        props.loading
          ? <ActivityIndicator size="small" />
          : <Icon name="plus" size={25} />
      }

    </TouchableOpacity>
  </View>
);

export default SearchBox;
