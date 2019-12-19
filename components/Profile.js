import * as React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  AsyncStorage,
} from 'react-native';
import {
  List,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  Surface,
} from 'react-native-paper';
import { reducer, initialState } from '../reducers/auth.reducer';
import {
  logout as logoutAction,
  getProfile as loadProfileAction,
} from '../actions';

export function ProfilePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [profile, setProfile] = useState(null);
  console.log('ProfilePage', state);
  const history = useHistory();
  const logout = () => {
    logoutAction(dispatch);
    history.push('/login');
  };
  const getProfile = async () => {
    const data = await loadProfileAction();
    console.log('getProfile', profile, data);

    setProfile(data);
  };
  useEffect(() => {
    !profile && getProfile();
  });

  return (
    <ScrollView>
      <SafeAreaView>
        <Surface
          style={{ position: 'relative', flex: 1, alignItems: 'center' }}>
          <Image
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{ width: '100%', height: 'auto', minHeight: 250 }}
          />
          <Avatar.Image
            size={128}
            source={{ uri: 'https://picsum.photos/400' }}
            style={{ position: 'absolute', bottom: -64 }}
          />
        </Surface>
        <View style={{ flex: 1, paddingTop: 64, minHeight: 250 }}>
          <Title> Name: {profile ? profile.username : ''} </Title>
          <Title> Email: {profile ? profile.email : ''} </Title>
        </View>
        <Button onPress={logout}> logout</Button>
      </SafeAreaView>
    </ScrollView>
  );
}
