import React, { Component } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import api from 'services/api';
import PropTypes from 'prop-types';
import styles from './styles';
import Filter from './components/filter';
import IssueItem from './components/IssueItem';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.repository.name}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#333',
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };

  static defaultProps = {
    navigation: () => {},
  };

  state = {
    activeFilter: 'Todas',
    issues: [],
    allIssues: [],
    refreshing: false,
    repository: {},
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({ repository: navigation.state.params.repository }, () => {
      this.loadIssues();
    });
  }

  loadIssues = async () => {
    const { repository } = this.state;

    this.setState({ refreshing: true });
    try {
      const { data: issues } = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues`);
      console.tron.log('issues: ', issues);


      let filter = await AsyncStorage.getItem('@GitIssues:filter');
      if (!filter) filter = 'Todas';

      this.setState({
        issues, allIssues: issues, activeFilter: filter, refreshing: false,
      }, () => this.changeFilter(filter));
    } catch (error) {
      console.tron.log(error);
    }
  }

  changeFilter = (filter) => {
    let issues = [];
    const { allIssues } = this.state;

    switch (filter) {
      case 'Abertas':
        console.tron.log('Abertas');
        issues = allIssues.filter(issue => issue.state === 'open');
        break;

      case 'Fechadas':
        issues = allIssues.filter(issue => issue.state === 'closed');
        break;

      default:
        issues = allIssues;
    }
    this.setState({ activeFilter: filter, issues });
    AsyncStorage.setItem('@GitIssues:filter', filter);
  }

  renderListItem = ({ item }) => (
    <IssueItem issue={item} />
  );

  render() {
    const { issues, activeFilter, refreshing } = this.state;

    return (
      <View style={styles.container}>
        <Filter changeFilter={filter => this.changeFilter(filter)} activeFilter={activeFilter} />

        <FlatList
          data={issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadIssues}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
