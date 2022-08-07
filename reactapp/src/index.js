import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //Görüntüleri düzenlemek için eklenmiş css dosyası
//import App from './App'; //projemizi oluşturdugumuzda default gelen component // App.js için burayı aç
import reportWebVitals from './reportWebVitals';
//import AppProps from "./AppProps"; //projemizi oluşturdugumuzda default gelen component
//import AppProps from "./AppState";
//import AppState from "./AppState"; //projemizi oluşturdugumuzda default gelen component
import {UserProvider} from "./context";
import AppReactRouter from "./AppReactRouter";
//ContextApi ile AppState i sarmallamam lazım
//{UserProvider} olarak yazıyorum çünkü context.js içinde export UserConsumer enlatya yazmıştım
//UserProvider Classinın(context.js) başına export yazarak süslü parantezle bunu çağırıyorum
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //Render olan sayfa oluşuyor
    <React.StrictMode>
        {/*<App />*/}
        {/*<AppProps/>*/}
        {/*Sarmallama İŞLEMİ*/}
        {/*<UserProvider>*/}
        {/*    <AppState/>*/}
        {/*</UserProvider>*/}
        {/*Sarmallama İŞLEMİ*/}

        <UserProvider>
        <AppReactRouter/>
        </UserProvider>


    </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
