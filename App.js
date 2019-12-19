import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RootRouter from './routers/Root';
import { Card, Provider as UIProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import store from './store'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <UIProvider style={styles.container}>
        <RootRouter />
      </UIProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
