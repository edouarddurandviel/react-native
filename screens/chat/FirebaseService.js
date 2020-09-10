/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default class FirebaseService {

    auth = auth()

    database = database()
    messageRef = this.database.ref('/messages')
    messageRefSet = this.messageRef.set({
      message: 'first post',
      user_id: uid,
      created_at: new Date(),
    })
    .then(() => console.log('Data set.'));

    async logApp() {
      apps = firebase.apps;
      console.log('App name: ', apps);
    }

    async signIn () {
      try {
        const response = await this.auth.signInAnonymously();
          return { user: response.user };
      } catch (error) {
          return { error };
      }
    }

    async fetchMessages () {
      const messages = await this.messageRef
        .orderBy('created_at', 'desc')
        .limit(10)
        .get();

      return messages.docs;
    }

    async createMessage ({ message, uid }) {
      await this.messageRef.add({
        message,
        user_id: uid,
        created_at: new Date(),
      });
    }
  }