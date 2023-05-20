import React from 'react';
import { Provider } from 'react-redux';
import MapplsGL from 'mappls-map-react-native';
import { store } from './store'
import ThemingScreen from './ThemingScreen'


const setAtlasClientId = '33OkryzDZsKwNKqmIhh6dct1a0PceRCrbvbFq5uQ9vAdRiMEQSshRV4pb7IzZn3FiuXVVO55dvGdNENwKwmC5Q==';
const setAtlasClientSecret = 'lrFxI-iSEg-s1jWpMVGUm7GLqL5o-TQsHERLT-iNuzw_a67OWGRZN2LuBG0yDSzSaq2DB3o6JPtDeGJpy1k-QVrcEZq_XQbo';
const setMapSDKKey = '589912ac5aaee2f99a32d1df3af5e590';
const setRestAPIKey = '589912ac5aaee2f99a32d1df3af5e590';

MapplsGL.setMapSDKKey(setMapSDKKey);
MapplsGL.setRestAPIKey(setRestAPIKey);
MapplsGL.setAtlasClientId(setAtlasClientId);
MapplsGL.setAtlasClientSecret(setAtlasClientSecret);

const App = () => {

  return (
    <Provider store={store}>
      <ThemingScreen />
    </Provider>
  )
}

export default App