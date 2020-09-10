/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '../constants';

export default class FirebaseService {

  auth = auth();
  firestore = firestore();
  messageRef = this.firestore.collection('messages');


  async newData (userId) {
      this.messageRef
      .add({
        message: 'nouveau message',
        user_id: userId,
        created_at: new Date(),
      })
      .then(() => console.log('Data set.'));
  }

  async isConnected () {
    if (auth().currentUser){
      return { user: auth().currentUser, isActive: true };
    } else {
      return { user: undefined, isActive: false  };
    }
  }

  async signIn () {
    try {
      const response = await this.auth.signInWithEmailAndPassword('e@eee.com', 'eeeeee');
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
