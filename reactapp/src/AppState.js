import logo from './logo.svg';
import './App.css';
import NavBar from "./layout/NavBar"; //Bu bir componetn oluşturumak için sınıfı çagırdım
//import User from "./components/User";//Componentimi import ettim
//import List from "./components/List";
//import State from "./components/State";
import React, {Component} from "react";
//import AppStateEventChangeElement from "./AppStateEventChangeElement";
import AppStateEventChangeElementss from "./AppStateEventChangeElementss";
import AddUser from "./forms/AddUser"; //Kullanıcı Form Ekleme

import Test from "./components/Test";


class AppState extends Component {
    // state = {
    //     users: [
    //         {
    //             id: 1,
    //             name: "Alper Öö",
    //             salary: 500,
    //             depart: "Bilişim"
    //         },
    //         {
    //             id: 2,
    //             name: "AhmetÖö",
    //             salary: 320,
    //             depart: "kilişim"
    //         },
    //         {
    //             id: 3,
    //             name: "Şahin Öö",
    //             salary: 100,
    //             depart: "Zilişim"
    //         }
    //     ]
    // } Context.js içine yapıştırdım
    //func_DeleteUser benim propslarla gönderdigim bir fonksiyondu ContextApi kullanacagım için bunu kaldırıyorum
    // func_deleteUser= (gelenid) =>{
    //     this.setState({
    //         //her bir users içindeki item objesi(user objesi) üzerinde geziniyorum
    //         //bu statedeki users objesini filtrele ve gelenid değerlerine göre hangisi eşit değilse onları statede güncelle
    //         //yani gelenid 1 geldi  id si 1 hariç hepsini filtrele ve güncelle
    //         users :this.state.users.filter(item=>gelenid !== item.id)
    //     })
    // }

    render() {
        //Değişken tanımlama yeri
        return (
            <div className="container">
                {/*//deneme isimli prop gönderecegim*/}
                {/*<Test test="denemepropgonderiyorum"></Test>*/}


                {/*componentin içine veri gönderiyorum*/}
                <NavBar title="UserApp"/> {/*Child Component*/}

                {/*<hr/>*/}
                {/*//Dinamik olarak apppros.js içinden list.js içindeki componente veri gönderebilirim*/}
                {/*<List*/}
                {/*name="Alper"*/}
                {/*twoname="Sahin"*/}
                {/*salary="500"*/}
                {/*/>*/}
                {/*<hr/>*/}
                {/*<List*/}
                {/*    name="İkinci List"*/}
                {/*    twoname="İkinci soyad"*/}
                {/*    salary="2222"*/}
                {/*/>*/}
                {/*<hr/>*/}
                {/*/!*<List />*!/ propsdan değer göndermezsem boş alır*/}
                {/*<State*/}
                {/*    name="Alper"*/}
                {/*/>*/}
                <hr/>
                <AddUser/>

                {/*
                    Componentler arası veri transferi
                    Normalde name diyip props ile componente data gönderiyordum
                    Artık böyle yapmayacagız
                    AppStateEventChangeElement 'na 1 tane state ekleyeceğiz bu state sadece buradaki AppStateEventChangeElement ları tutacak
                    */}
                {/*<AppStateEventChangeElement*/}
                {/*    name="Alper" depart="Departman"/>*/}
                {/*<AppStateEventChangeElement */}
                {/*    name="Alper" depart="Departman"/>*/}


                {/*//Componentler arası iletişim*/}
                {/*<AppStateEventChangeElement name="Alper"*/}
                {/*salary="500"*/}
                {/*depart="Bilisim"/>*/}
                {/*//bunun yerine yukarıda oluşturdgum array state i props ile başka komponente yolluyorum ->ÇOKLAMA*/}
                {/*<AppStateEventChangeElementss*/}
                {/*    func_deleteUser={this.func_deleteUser}*/}
                {/*    users={this.state.users}*/}
                {/*/>*/}
                {/*//fonksiyonumu alt childa gönderiyorum*/}

                <AppStateEventChangeElementss />
            </div>

        );
    }
}

export default AppState;
