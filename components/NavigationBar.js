import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Keywords } from './Keyword';
import { ListNews } from './ListNews';
import { ProfilePage } from './Profile';


export class NavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
     
      { key: 'top', title: 'Top Healines', icon: 'queue-music' },
      { key: 'keyword', title: 'Keywords', icon: 'keyword' },
       { key: 'profile', title: 'Profile', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: ProfilePage,
    keyword: Keywords,
    top: ListNews,
  });

  render() {
    return (
     
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
     
    );
  }
}
