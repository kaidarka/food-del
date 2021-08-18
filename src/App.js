import React from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from "./Components/Menu/Menu";
import {GlobalStyle} from "./Components/Styled/GlobalStyle";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/UseOpenItem";
import {useOrders} from "./Components/Hooks/useOrders";
import {useAuth} from "./Components/Hooks/useAuth";

const firebaseConfig = {
    apiKey: "AIzaSyB7thgKR2JeQ0kAerHDOSwALenpBbUuQaw",
    authDomain: "mrdonalds-416f2.firebaseapp.com",
    databaseURL: "https://mrdonalds-416f2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mrdonalds-416f2",
    storageBucket: "mrdonalds-416f2.appspot.com",
    messagingSenderId: "602611843036",
    appId: "1:602611843036:web:c73f48336b1bf5c228d919"
};

firebase.initializeApp(firebaseConfig);

function App() {

    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
        <Order
            {...orders}
            {...openItem}
            {...auth}
            firebaseDatabase={firebase.database}
        />
      <Menu {...openItem}/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;