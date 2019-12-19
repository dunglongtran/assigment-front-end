import * as React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
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
import {register as registerAction} from '../actions'

export function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('RegisterPage', state);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();
  const register = () => {
    // dispatch({ type: 'register', profile: { email, username, password } });
    registerAction(dispatch,{ email, username, password })
  };
  const backToLogin = () => {
    history.goBack();
  };
  const moveToHome = () => {
    history.push("/home");
  };
  useEffect(() => {
    if (state.isLogined) {
      moveToHome();
    }
  });
  return (
    <View style={styles.container}>
      <Title>RegisterPage</Title>
      <Surface style={[styles.container, styles.sufrace]}>
        <TextInput
          label="Username"
          mode="flat"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
          placeholder="Please input username"
        />
        <TextInput
          label="Email"
          mode="flat"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder="Please input email"
        />
        <HelperText type="error" visible={!email.includes('@')}>
          Email address is invalid!
        </HelperText>
        <TextInput
          label="Password"
          mode="flat"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          placeholder="Please input password"
        />
        <TextInput
          label="Confirm Password"
          mode="flat"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={styles.input}
          placeholder="Please confirm password"
        />
        <HelperText type="error" visible={password !== confirmPassword}>
          Password not match!!
        </HelperText>
      </Surface>
      <Button onPress={register}> Register </Button>
      <Button onPress={backToLogin}> Login </Button>
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
