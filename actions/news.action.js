import axios from 'axios';
import {AsyncStorage} from 'react-native'
const API_KEY='9581dcb3622a4d4688da8422dbce8f96'
export async function topHeadline(){
const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
console.log('topHeadline',result)
return result.data.articles;
}

export async function getDetail(id){
  const data= await AsyncStorage.getItem('article');
  return JSON.parse(data);
}