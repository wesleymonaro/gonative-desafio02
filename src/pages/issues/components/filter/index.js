import React from 'react';
import {
  View, TouchableOpacity, Text,
} from 'react-native';

import styles from './styles';

const filterTransparency = 'rgba(221,221,221, 0.5)';

const Filter = props => (
  <View style={styles.container}>

    <TouchableOpacity onPress={() => props.changeFilter('Todas')} style={[styles.button, { backgroundColor: (props.activeFilter == 'Todas' ? filterTransparency : '#DDD'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }]}>
      <Text style={[styles.buttonText, { fontWeight: (props.activeFilter == 'Todas' ? 'bold' : 'normal') }]}>
        Todas
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => props.changeFilter('Abertas')} style={[styles.button, { backgroundColor: (props.activeFilter == 'Abertas' ? filterTransparency : '#DDD') }]}>
      <Text style={[styles.buttonText, { fontWeight: (props.activeFilter == 'Abertas' ? 'bold' : 'normal') }]}>
        Abertas
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => props.changeFilter('Fechadas')} style={[styles.button, { backgroundColor: (props.activeFilter == 'Fechadas' ? filterTransparency : '#DDD'), borderTopRightRadius: 5, borderBottomRightRadius: 5 }]}>
      <Text style={[styles.buttonText, { fontWeight: (props.activeFilter == 'Fechadas' ? 'bold' : 'normal') }]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

export default Filter;
