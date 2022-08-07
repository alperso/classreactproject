import logo from './logo.svg';
import './App.css';
import NavBar from "./layout/NavBar"; //Bu bir componetn oluşturumak için sınıfı çagırdım
import User from "./components/User";//Componentimi import ettim

import {Component} from "react";


class App extends Component {
  render() {//Render fonk return ile jsx formatı dönüyor JAVASCRİPT İÇİNDE html yazmamızı saglar
    //biz dönünce index.js de burayı render ediyoruz

      //Bir değişken tanımlamak istersem renderin içinde tanımlıyorum
      const test=34;
      const isAuth=true;
  return (
    <div className="App">

        <h1 className="naber">Deneme</h1>
        <label htmlFor="Alper">asd</label>
       Den

        <hr></hr>
        {1+1}
        {/*//Javascript ifadesi yazabiliyorum*/}
        <hr></hr>
        <h2>{"alper".toUpperCase()}</h2>
        <h6>{test}</h6>
        <hr/>
        {/*Yukarıdaki isAuth bool ifadesine göre yazdırma check false*/}
        <div>
            {/*Koşul çalıştıracagım için süslü parantez içine yazmalıyım*/}
            {
                //isAuth trueysa kullanıcı kayıtlı değilse  null
                isAuth ? <p>Kullanıcı Kayıt</p>
                    :null
            }
        </div>

        <hr/>
        {/*Components kısmıında User.js oluşturdugum compenenti bu kısımda çalıştırımak isitiyorum*/}
        {/*Yukarıya Components/User.js yolunu import etmem gereklidir.*/}
        <h5 style={{color:"red",fontSize:"30px"}}>App Component</h5>
        <h5 className="header">App Component Blue</h5>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <hr/>
        {/*Boostrap eklendikten sonra*/}
        <div className="container"><h4>Boostrap</h4></div>
        <hr/>
        <NavBar/>



    </div>
    //JSX formatınıın sadece 1 tane div dönemesi gerkiyor
  );
  }
}

export default App;
