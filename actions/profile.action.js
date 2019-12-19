
import {AsyncStorage} from 'react-native'

export async function getProfile(){
  console.log()
  const data= await AsyncStorage.getItem('profile');
  return JSON.parse(data);
}