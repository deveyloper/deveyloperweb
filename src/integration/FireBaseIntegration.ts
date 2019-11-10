import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC8onPngx6YS7b-9NGP1iMsR1KdFgGehHQ",
    authDomain: "deveyloper-97003.firebaseapp.com",
    databaseURL: "https://deveyloper-97003.firebaseio.com",
    projectId: "deveyloper-97003",
    storageBucket: "deveyloper-97003.appspot.com",
    messagingSenderId: "600820450057",
    appId: "1:600820450057:web:f3cb3169f5c9019b7809d8"
};


export default class FireBaseIntegration {

    private static initialized : boolean = false;
    static Initialize(){
        firebase.initializeApp(firebaseConfig);
        this.initialized = true;
    }

    static getFireStore(): firebase.firestore.Firestore {
        if(!this.initialized){
            this.Initialize();
        }
        return firebase.firestore();

    }
}