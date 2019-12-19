import * as React from 'react';
import { useState, useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Touchable,
} from 'react-native';
import {
  List,
  Card,
  Title,
  Paragraph,
  Avatar,
  Surface,
  TextInput,
  HelperText,
  Button,
  Subheading,
} from 'react-native-paper';
import { reducer, initialState } from '../reducers/auth.reducer';
import { login as loginAction } from '../actions';

export function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  const history = useHistory();
  const navigateTo = () => {
    console.log('register');
    history.push('/register');
  };
  const login = () => {
   
    loginAction(dispatch,{username,password});
  };
  const moveToHome = () => {
    history.push('/home');
  };
  useEffect(() => {
    if (state.isLogined) {
      moveToHome();
    }
  });
  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <Surface style={[styles.container, styles.sufrace]}>
        <TextInput
          label="Username"
          mode="flat"
          value={username}
          onChangeText={text=>setUsername(text)}
          style={styles.input}
          placeholder="Please input username"
        />
        <TextInput
          label="Password"
          mode="flat"
          value={password}
          onChangeText={text=>setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Please input password"
        />
      </Surface>
      <Button onPress={login}> Login </Button>
      <Button onPress={navigateTo}>Create a account</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  sufrace: { width: '100%', flex: 2, alignItems: 'stretch' },
  input: {
    margin: 10,
    backgroundColor: 'transparent',
  },
});
