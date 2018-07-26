import { StackNavigator } from 'react-navigation';

import RepositoriesScreen from 'pages/repositories';
import IssuesScreen from 'pages/issues';

const createNavigator = StackNavigator({
  Repositories: {
    screen: RepositoriesScreen,
    navigationOptions: {
      title: 'GitIssues',
      headerBackTitle: null,
    },
  },
  Issues: { screen: IssuesScreen },
},
{
  initialRouteName: 'Repositories',
});

export default createNavigator;
