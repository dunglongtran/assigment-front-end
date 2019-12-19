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
  Subheading
} from 'react-native-paper';
import { reducer, initialState } from '../reducers/auth.reducer';
import {
  logout as logoutAction,
  getDetail as getDetailAction,
} from '../actions';

export function DetailPage() {
  const [article, setArticle] = useState(null);
  const history= useHistory();
  const loadDetail = async () => {
    const item = await getDetailAction('');
    setArticle(item);
  };
  useEffect(() => {
    article == null && loadDetail();
  });
  const feature =
    article && article.urlToImage
      ? article.urlToImage
      : 'https://picsum.photos/700';

  return (
    <ScrollView>
      <SafeAreaView>
        <Surface
          style={{ position: 'relative', flex: 1, alignItems: 'center' }}>
          <Image
            source={{
              uri: feature,
            }}
            style={{ width: '100%', height: 'auto', minHeight: 250 }}
          />
        </Surface>
        {article && (
          <View style={{ flex: 1 }}>
            <Title> {article.title} </Title>
            <Subheading>{article.author}</Subheading>
            <Paragraph> {article.description} </Paragraph>
            <Paragraph> {article.content} </Paragraph>
          </View>
        )}
        <Button onPress={() => {history.goBack()}}> Back</Button>
      </SafeAreaView>
    </ScrollView>
  );
}
