import React from 'react';
import GestureHandler from './Screen/GestureHandler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Flag from './Screen/Flag';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* content */}
      <GestureHandler />
      {/* <Flag/> */}
    </GestureHandlerRootView>
  );
}
