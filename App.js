import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppleHealthKit from 'react-native-apple-healthkit-rn0.40';

let options = {
    permissions: {
        read: ["StepCount"] 
    }
};

console.log(AppleHealthKit);

AppleHealthKit.initHealthKit(options: Object, (err: Object, res: Object) => {
    if(err) {
        console.log("error initializing healthkit: ", err);
        return;
    }
    // healthkit initialized...
});


export default class App extends React.Component {
  render() {
	  AppleHealthKit.getLatestWeight(null, (err: Object, weight: Object) => {
    if(err){
        console.log("error getting current weight: ", err);
        return;
    }
		  
});
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
