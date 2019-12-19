import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ScrollView, SafeAreaView,AsyncStorage } from 'react-native';
import { List, Card, Title, Paragraph, Button } from 'react-native-paper';
import { topHeadline as topHeadlineAction } from '../actions';

const NewsItem = ({ item }) => {
  let history = useHistory();
  function handleClick() {}
  const showDetail =async () =>{
    await AsyncStorage.setItem('article',JSON.stringify(item));
    history.push(`/detail`)
  }
  const feature =
    (item && item.urlToImage) ? item.urlToImage : 'https://picsum.photos/700';
  return (
    <Card>
      <Card.Cover source={{ uri: feature }} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Card.Actions
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Button onPress={handleClick}>Origin</Button>
          <Button onPress={showDetail}>Details</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};
export function ListNews() {
  const [items, setItems] = useState([]);
  const loadArticles = async () => {
    const articles = await topHeadlineAction();
    setItems(articles);
  };
  useEffect(() => {
    items.length === 0 && loadArticles();
  });
  return (
    <ScrollView>
      {items.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </ScrollView>
  );
}
