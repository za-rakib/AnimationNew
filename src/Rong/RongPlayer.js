import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
const SIZES = Dimensions.get('window');
const RongPlayer = () => {
  return (
    <SafeAreaView style={[styles.wrapper]}>
      <Text style={{color: 'red', marginTop: 30}}>RongPlayer</Text>
      <Text>
        "রূপকথা" যদি "পূর্ণতা" পেতো তাহলে "যত দূরেই" থাকতে "তোমাকে" মনে পড়তো।
        "অসামাজিক" "একটি ছেলে" আমি, "মহরাজের" মত "বসে আছি একা", তীব্র "হতাশার"
        পরেও "আশা" নিয়ে তোমার "প্রতিক্ষায়" আছি, হয়তো এটাই "অবাক ভালোবাসা"
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'white',
    // elevation: 10,
    // width: '100%',
    // height: SIZES.height,
    // position: 'absolute',
    // zIndex: 9999,
    // overflow: 'hidden',
  },
});
export default RongPlayer;
