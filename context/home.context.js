import { createContext } from 'react';
const KEYS = ['bitcoin', 'apple', 'earthquake', 'animal'];
const context = { key: KEYS[0] };
const updateKey = key => {
  context.key = key;
};
export const homeContext = createContext(context);
