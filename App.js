/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';

const App = () => {
  const animation = useSharedValue(0);
  console.log({animation});
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
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#ee3333',
          }}></Animated.View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            height: 50,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => console.log('jasdfhgh')}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount(prevCount => prevCount + 1);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Text>Count: {count}</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

// export default App;
