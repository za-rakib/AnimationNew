import React from 'react';
import GestureHandler from './Screen/GestureHandler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Flag from './Screen/Flag';
import GestureHandler2 from './Screen/GestureHandler2';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* content */}
      <GestureHandler2 />
      {/* <Flag/> */}
    </GestureHandlerRootView>
  );
}
