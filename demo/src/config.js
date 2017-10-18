import firebase from 'firebase';

const config= {
  firebase_config: {
    apiKey: 'AIzaSyB31cMH9nJnERC1WCWA7lQHnY08voLs-Z0',
    authDomain: 'react-most-wanted-dev.firebaseapp.com',
    databaseURL: 'https://react-most-wanted-dev.firebaseio.com',
    projectId: 'react-most-wanted-dev',
    storageBucket: 'react-most-wanted-dev.appspot.com',
    messagingSenderId: '70650394824'
  },
  firebase_providers: [
    firebase.auth.GoogleAuthProvider,
    firebase.auth.EmailAuthProvider,
  ],
  initial_state: {
    theme: 'dark',
    locale: 'en'
  },
  drawer_width: 256
}

export default config;
