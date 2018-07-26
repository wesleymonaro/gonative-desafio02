import React, { Component } from 'react';
import {
  View, FlatList, AsyncStorage,
} from 'react-native';
import api from 'services/api';

import styles from './styles';

import SearchBox from './components/SearchBar';
import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#333',
  };

  state = {
    repositoryToAdd: '',
    repositories: [],
    loading: false,
    refreshing: false,
    error: false,
  }

  componentDidMount() {
    this.loadRepositoriesFromStorage();
  }

  loadRepositoriesFromStorage = async () => {
    this.setState({ refreshing: true });

    const repositories = await AsyncStorage.getItem('@GitIssues:repositories');

    if (repositories) this.setState({ repositories: JSON.parse(repositories) });

    this.setState({ refreshing: false });
  }

  handleAddRepository = async () => {
    const { repositories, repositoryToAdd } = this.state;

    console.tron.log(repositoryToAdd);
    this.setState({ loading: true, error: false });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryToAdd}`);

      console.tron.log(repository);

      this.setState({
        repositories: [
          ...repositories,
          repository,
        ],
        repositoryToAdd: '',
        error: false,
      }, async () => {
        const newRepo = {
          id: repository.id,
          name: repository.name,
          owner: {
            login: repository.owner.login,
            avatar_url: repository.owner.avatar_url,
          },
        };

        let reposStorage = await AsyncStorage.getItem('@GitIssues:repositories');

        if (!reposStorage) {
          reposStorage = [];
        } else {
          reposStorage = JSON.parse(reposStorage);
        }

        reposStorage.push(newRepo);

        await AsyncStorage.setItem('@GitIssues:repositories', JSON.stringify(reposStorage));
      });
    } catch (error) {
      console.tron.log(error);
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  renderListItem = ({ item }) => (
    <RepositoryItem repository={item} />
  );

  render() {
    const {
      repositories, repositoryToAdd, loading, refreshing, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <SearchBox
          text={repositoryToAdd}
          changeText={text => this.setState({ repositoryToAdd: text })}
          buttonAction={() => this.handleAddRepository()}
          loading={loading}
          withError={error}
        />

        <View style={styles.separator} />

        <FlatList
          data={repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositoriesFromStorage}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
