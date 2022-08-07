import React, {Component, useReducer} from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const UserContext = React.createContext();//ContextApi objesi oluşturuyorum
//Provider(sağlayıcı) , Consumer(tüketici)

const reducer = (state, action) => {
    //reducer görevi statei değiştirmektir
    switch (action.type) {
        case "DELETE_USER":
            return {
                //spread operatörü js es6 ile gelen özellik
                ...state,//güncellenmemiş verimi dışarı çıkardım (paketten)

                users: state.users.filter(item => action.payload !== item.id)
                //action.paylod gönderecegiz ve içinde id user.id olmayanaları yeni users içine atacagız
                //filtreleme işleme yaparak her bir users üzerinde gezinecegiz ve idsi eşit olmayanları users içinde
                //tutacagız eşit olmayanlar silinecek
            }
        case "ADD_USER":
            return {
                //spread operatörü js es6 ile gelen özellik
                ...state,//güncellenmemiş verimi dışarı çıkardım (paketten)
                users: [...state.users, action.payload]
                //users: state.users.push(action.payload) yapsam array içine direk ekleme yapamıyorum
                //burada bir array dönecegim ...state.users diyerek spread öperadörüyle önceki bilgileri
                //ve yeni bilgileri gelen action.payload dan gelen objeyi eklemiş olacagım ve array olara tekrar
                //users a eşitlemiş olacagım

            }
        case "UPDATE_USER":
            return {
                //spread operatörü js es6 ile gelen özellik
                ...state,//güncellenmemiş verimi dışarı çıkardım (paketten)
                users:state.users.map(item=>item.id === action.payload.id ? action.payload:item)
                //Gönderilen statimin içindeki users propsun her bir elemanını item olarak tanımladım
                // bu itemlerden yani props içindeki id si benim action içinde paylod da gönderidigim payloadun idye eşit ise
                // ben burada acttionumu o anki users statemin yerine geçmek istiyorum ancak değilse gelen item aynı kalsın(aynı user kalsın gönderilen propsdaki objem yani)
                //

            }
        default:
            //actiontype istenilen işlem için gelmezse eski stateimizi geri dönderiyoruz
            return state

    }
}

export class UserProvider extends Component { //burayı ayrı exportluyorum provider çağrımak için
    state = {
        users: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
            //güncellenmemiş state mizi gelen action ile reducer içine göndereceğiz
            //setState diyerek bunu güncellemiş olacagız

        }
        //Actionları gönderdiğimiz fonksiyondur
    }

    componentDidMount = async () => {
        //veri gelene kadar await ile bekliyorum ve gelince objeye at
        // const response=await axios.get("http://localhost:3040/users"); //gelen get isteğimizi response içinden alabileceği
        // console.log(response);
        // this.setState({users:response.data}) //gelen veriye göre statemiz güncellenmiş (users) olacak

       //--FETCH ile çekmek
        console.log("Fetchapi için geldim");
        fetch('http://localhost:3040/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data}));
    }


    render() {
        return (
            //bu state i props olarak nerede kullanmak istersem oraya gönderiyorum
            //gönderilen yerde value olarak alıp işliyorum
            //Dispatch(child comp dan actionu buraya göndermek için(context.js'e) kulanılır) kullanıyoruz
            //bunu kullanmak için state içind dispatch yazmalıyım
            <UserContext.Provider value={this.state}>
                {this.props.children}
                {/*Buraya <AppState/> Yazmışım gibi düşünebilirim*/}
                {/*App componentimizi simgeliyor. React tarafından otomatik gönderilen propsumuzdur*/}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;//this.state içinde gelen (providera) state kullanmak için tüketici oluşturdum
export default UserConsumer; //diğer dosyalarda kullanmak için export ettik


/*
* Spread Operatörü
* state = {
* a:"alper",
* b:20,
* c:30
* } gibi eski stateimiz var
* {
* ...state yaparak yeni bir state oluşturuyoruz
* bunu yapınca şöyle bir ifade oluyor
* }
* {
* * a:"alper",
* b:20,
* c:30,
* }
* filtreleme yaptıgım için b 20 değilde 10 olsa b 20 gidecek
* {
* * a:"alper",
* b:10,
* c:30,
* }
* yeni state bu şekilde olacaktır.
* */