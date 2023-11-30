import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import App from './App';
import { name as appName } from './app.json';


notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === 'CHANNEL_CREATED' && detail?.id === 'default') {
    console.log('Default channel has been created');
  }
});
messaging().setBackgroundMessageHandler(async remoteMessage => {
  const channelId = await notifee.createChannel({
    id:'default',
    name:'Default Channel'
  });
  await notifee.displayNotification({
    title:remoteMessage.data.title,
    body:remoteMessage.data.body,
    android:{
      channelId,
      pressAction:{
        id:'default'
      }
    }
  })
});


AppRegistry.registerComponent(appName, () => App);

