import { AsyncStorage } from 'react-native';

export async function checkLogin(dispatch) {
  try {
    let isLogined = await AsyncStorage.getItem('isLogined');
    console.log('checkLogin', isLogined);
    dispatch({
      type: 'checkLogin',
      isLogined: JSON.parse(isLogined || 'false'),
    });
  } catch (error) {
    console.log('checkLogin', error);
  }
}
export async function login(dispatch, input) {
  try {
    const data = await AsyncStorage.getItem('profile');
    const profile = JSON.parse(data || '{}');
    const { username, passwrod } = input;
    const isLogined =
      username === profile.username && passwrod == profile.passwrod;
    console.log('login', profile, input, isLogined);
    console.log(typeof isLogined);
    await AsyncStorage.setItem('isLogined', isLogined+'');
    dispatch({ type: 'logined', isLogined: isLogined });
  } catch (error) {
    console.log('login', error);
  }
}
export async function logout(dispatch) {
  try {
    await AsyncStorage.setItem('isLogined', 'false');
    dispatch({ type: 'logout' });
  } catch (error) {
    console.log('logout', error);
  }
}
export async function register(dispatch, profile) {
  console.log('register', profile);
  try {
    await Promise.all([
      AsyncStorage.setItem('isLogined', 'true'),
      AsyncStorage.setItem('profile', JSON.stringify(profile)),
    ]);
    dispatch({ type: 'register', isLogined: true });
  } catch (error) {
    console.log('register', error);
  }
}
