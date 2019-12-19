import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const KEYS = ['bitcoin', 'apple', 'earthquake', 'animal'];

export function KeyItem({ text, isChecked }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
      <Text>{text}</Text>
      <RadioButton value={text} />
    </View>
  );
}

export function Keywords() {
  const [checked, setChecked] = useState(KEYS[0]);
  return (
    <RadioButton.Group
      onValueChange={value => {
        setChecked(value);
      }}
      value={checked}>
      {KEYS.map(key => (
        <KeyItem key={key} text={key} />
      ))}
    </RadioButton.Group>
  );
}
