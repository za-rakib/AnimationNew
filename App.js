/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{rotate: `${animation.value}deg`}]};
  });

  // useEffect(() => {
  //   console.log({animation});
  // }, [animation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          color: 'red',
          fontSize: 30,
          marginTop: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Animation
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              height: 150,
              width: 150,
              backgroundColor: '#ee3333',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedStyle,
          ]}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#fff',
              borderRadius: 25,
              borderColor: '#000',
            }}></View>
        </Animated.View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            height: 50,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            if (clicked) {
              animation.value = withTiming(360, {duration: 300});
            } else {
              animation.value = withTiming(0, {duration: 500});
            }
            setClicked(!clicked);
          }}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
