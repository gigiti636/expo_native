import React, {Fragment, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
/*import firebase from 'expo-firebase';*/
/*import messaging from 'react-native-firebase';*/
import messaging from '@react-native-firebase/messaging';
import {Permissions, Notifications} from 'expo'


const App = () => {

/*  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }*/

  //  https://staging.myrestaurant.gr/
  //  https://admin.myrestaurant.gr/
  //  http://localhost:3000/

/*  window.onmessage = function(event) {
    alert(event.data);
  };*/

  //document.getElementById('targetFrame').contentWindow.postMessage('data','*');

  // document.querySelector("#targetFrame").contentWindow.test_funk()


  useEffect(() => {
    alert(1)
  }, []);

  const [contentLoaded , setContentLoaded] = useState(false);
  return (
      <SafeAreaView style={styles.container}>
        {Platform.OS === "web"
            ?
            <iframe id='targetFrame' src="https://staging.myrestaurant.gr" name="ios-app" height={'100%'} width={'99.99%'} />
            :
            <View style={{display:'flex', width:'100%',height:'100%'}}>
                {!contentLoaded &&
                <ActivityIndicator size="small" color="red" /> }
                <WebView
                    source={{uri: 'https://staging.myrestaurant.gr'}}
                    style={{marginTop: 22, flex: 1}}
                    startInLoadingState={true}
                    injectedJavaScript={console.log('eo')}
                    onLoad={() => setContentLoaded(true)}
                    cacheEnabled={false}
                    userAgent={'native'}
                />
            </View>

        }

      </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


export default App
