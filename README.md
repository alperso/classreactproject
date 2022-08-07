# reactproject
ReactDocument
npm install -g create-react-app -> ile git global react package kurulumunu yaptım
Normal klasör oluşturdum intellji sürükledim terminale boş klasörle geldim
create-react-app reactapp    diyerek projemize isim verdik ve projemiz oluşacaktır.
(Nodejs 14 sürümünü indirdim ben de 10 vardı mahmut un kurdugu) biraz bekledimSuccess! Created reactapp at C:\Users\alperoner\Desktop\reactproject\reactapp
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactapp
  npm start

Happy hacking!




Npm run start diyerek react localhost açtık  CTRL C diyerek bağlantıyı sonlandırırız. Çalıştırmak için tekrar run yapmalıyız
You can now view reactapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.2.7:3000

Note that the development build is not optimized.
To create a production build, use npm run build.,

PACKAGE.JSON : npm paketlerini yönetmek için kullandığımız  manifesto dosyası
Kütüphaneler,projemizinin ismi vs (dependencies – scripts önemlidir)
Dependensi proje bağımlılıklarını gösterir
EĞER PROJEMİZİ YAYINLAYACAKSAK npm run build diyerek TEK BİR BUNDLE dosyası haline getirip çıkarabiliyoruz. Npm test ise test içindir.  
React-dom bağımlılık olarak eklenmiştir.


React Dev Tools eklentisini ekledik 1 Tane componentsin içinde hangi state ve propslar var görürüz.
JSX Formatı (Arayüz oluşturmak için Şablondur) JsExtensionsu dur Javascriptin içinde html kodlarını çalıştırmayı saglıyor. JSX Sadece 1 tane parent(1 tane div veya1  tane header dönmesi gibi ) dönebilir. Genel olarak 1 tane div dönülür


Functional Components
React de 2 türlü component yapısı var 1-Classbase Compoent 2-Functional Components
Şöyle bir fark var. Functional components herhangi bri state almıyorsa(1 component herhangi bir state barındırmıyorsa veya durum barındırıymıoyrsa ve sabit olacaksa functional compoennt oluşturarak yapabilirsini.z) Class componentslerimde hem state hem props olabilir.

User.js projede oluşturdugmuz compoonents ClassBase Componentti şimdi bir functional comp. Oluşturualım


Props Kullanımı
Bir Component -> Diğer Components e veri aktarımı için kullanılır
Let-var -const farkı
//Destructing (Değişken oluşturma) ve tanımlama(initialization)
//var ile oluşturdugumuzda değer atanmazda default undefined atanır
// var greeter="hey";
// var greeter="hey2"; şeklinde tekrar var oluşturup aynı değişeknin değerini güncelleyebilirim
//let sadece oluşturuldugu yerde {} süsülü parantez içinde kullanılır
// let ile oluşturulan değişken bir daha tanımlanıp içine değer atılmaz ancak degeri güncellenebilir.
// let alper="oner";
// let alper="sahin"; //olamaz
//
// let alper="oner";
// alper="sahin"; olmalıdır
//
//const ile oluşturulan değişkene daha sorna tekrar değer ataması yapılamaz -->İMMUTABLEE(DEĞİŞMEZ)
//let ile oluşturdugumza değer ataması yapabiliriz.
//immutable ne gibi durumlarda mutable olduğuna bir bakalım.
// const person={name:"Alper Oner"}
// person.name="Berat Oner"
// person={}  //TypeError Geçersiz uyarısı alırız
// Bir nesne içindeki değeri değiştirmek veya özellik eklememk tekrar atama yapmak değildir. Immutable durumu oluşturulan
// nesnenin kendisine değer ataması yapılamama durumuna denir.

State
O anki componentin durumunu gösteren ve değişik propertylerden oluşan javascript objesidir.Her component kendi içinde statelere sahip olabilir ve bu stateler o componentin durumunu o ankini gösterir. 
•	Bu componentin üzerine tıklanılmışmı
•	Şuan Bu component görünür mü
•	Şuradaki butona tıklanmışmı gibi 
Her şey state objesinin içinde barınabilir.
Bizim sitemiz componentlerden oluşur ve state değiştiğinde virtial dom bunu görüyor ve sadece o component tekrar render ediliyor(diğer componentler render olmuyor)

 

State : diyerek güncelleyemiyoruz bu değişme durumunu setState function kullanacağız
1 Componenttedi state durumunu başka componente props yardımıyla gönderebliyioruz
Stateler daha küçük projelrede kulalnılıyor büüyk projelerde contextapi kullanarak iletişim saglatabiliyoruz
State 2 şekilde verilir
1-constractur içinde vermek
2-component User.js içinde classların en tepesinde bunu oluşturmak

Çoklama yaparak Birden fazla 
<User name:”Alper”/>
<User name:”Alper”/>
… oluşturmak yerine bu verileri bir state içinde array tanımlayıp Users diyerek ara katman oluşturduğum componente props olarak gönderirisem ve bu gönderdiğim Users içinde de gelen props array verisini alıp User içine map leyip tek seferde gönderirsem User diye birden fazla component yapmadan Çoklayarak User componenti oluşturmuş oluyorum.Alttaki en son hali

Normalde
					









Silme nasıl olacak?
		


















App.js

import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"; //Bu bir componetn oluşturumak için sınıfı çagırdım
//import User from "./components/User";//Componentimi import ettim
//import List from "./components/List";
//import State from "./components/State";
import React, {Component} from "react";
//import AppStateEventChangeElement from "./AppStateEventChangeElement";

import AppStateEventChangeElementss from "./AppStateEventChangeElementss";

class AppState extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Alper Öö",
                salary: 500,
                depart: "Bilişim"
            },
            {
                id: 2,
                name: "AhmetÖö",
                salary: 320,
                depart: "kilişim"
            },
            {
                id: 3,
                name: "Şahin Öö",
                salary: 100,
                depart: "Zilişim"
            }
        ]
    }
    func_deleteUser= (gelenid) =>{
        this.setState({
            //her bir users içindeki item objesi(user objesi) üzerinde geziniyorum
            //bu statedeki users objesini filtrele ve gelenid değerlerine göre hangisi eşit değilse onları statede güncelle
            //yani gelenid 1 geldi  id si 1 hariç hepsini filtrele ve güncelle
            users :this.state.users.filter(item=>gelenid !== item.id)
        })
    }

    render() {
        //Değişken tanımlama yeri
        return (
            <div className="container">
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
                <AppStateEventChangeElementss
                    func_deleteUser={this.func_deleteUser}
                    users={this.state.users}
                />
                {/*//fonksiyonumu alt childa gönderiyorum*/}
            </div>

        );
    }
}

export default AppState;

Users.js (Çoklanan yer)
import React, {Component} from 'react';
import AppStateEventChangeElement from "./AppStateEventChangeElement";
import PropTypes from 'prop-types';

class AppStateEventChangeElementss extends Component {
    render() {
        const {users,func_deleteUser} = this.props; //props olarak dizim state içindekiler geldi
        // console.log("alper");
        // console.log(users);
        return (
            <div>
                {
                    users.map(item => {
                        return (
                            <AppStateEventChangeElement key={item.id}
                                                        id={item.id}
                                                        name={item.name}
                                                        salary={item.salary}
                                                        depart={item.depart}
                                                        func_deleteUser={func_deleteUser}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

//Buraya gelen verileri kontrol etmek için proptype kullanıyorum
//Ne geliyor ?
//func_deleteUser fonksiyonu ve users arrayi

AppStateEventChangeElementss.proptype = {
    users: PropTypes.array.isRequired,//Mutlaka bu arraytipinde olmalı ve gelmelidir
    func_deleteUser:PropTypes.func.isRequired //mutlaka fonksiyon gönderilmeli ve kesinlikle gelmeli zorunluluk koyuyorum
}

export default AppStateEventChangeElementss;

User.js(Ekrana basılan yer bundan çok oluyor)
import React, {Component} from 'react';
import PropTypes from "prop-types";//props ekleyerek veri kontrolü yapacagım boş gelmişse default deger ata gibi

//Componentin state normalde değiştirilmez ama ben setState yaparak değiştirieblirim
//onclick h4 içindekine tıklanınca değiştirilmeyen state içindeki isVisible değerini değiştirelim
class AppStateEventChangeElement extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "BilgiYok",
        depart: "BilgiYok"
    }
    onClickEvent = (e) => {
        // this.state = {
        //     isVisible: false
        // }
        //Bu kullanım yanlıştır değiştiremiyoruz hazır statei
        //setState Kullanmalıyım
        this.setState({
            isVisible: !this.state.isVisible
            //false ise true true ise false yap
        })
    }
    onDeleteUser = (e) => {
        //Props den gelen Users yani A
        // ppStateEventChangeElementss den gelen func ve id değerini aldım
        const {id, func_deleteUser} = this.props; //Yukardan bu func geldiği için alıyorum id siyle birlikte
        func_deleteUser(id);
    }

    render() {
        const {name, salary, depart} = this.props;
        const {isVisible} = this.state;
        return (
            <div className="container">
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">

                            {/*<p>Bu bir stateobjesidir ve içindeki test propertyni yazdırılmasıdır=>{this.state.test}</p>*/}
                            <h4 className="d-inline" onClick={this.onClickEvent}
                                style={{cursor: "pointer"}}>Göster/Gizle</h4>
                            <i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{cursor: "pointer"}}></i>
                        </div>

                        {
                            //isVisible true ise card body gösterilecek değilse null
                            isVisible ?
                                <div className="card-body">
                                    <p className="card-text">{name}</p>
                                    <p className="card-text">{depart}</p>
                                    <p className="card-text">{salary}</p>


                                </div> : null
                        }


                    </div>
                </div>
            </div>
        );
    }
}
//Veritipi kontorlüni yapıyorum
AppStateEventChangeElement.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    depart: PropTypes.string.isRequired,
    func_deleteUser: PropTypes.func.isRequired

}
export default AppStateEventChangeElement;
1 Component için birden fazla yere ayrı props gönderiyorum yukarıdan aşağıya bu benim için yorucu onun için ContextApi kullanacagım

 

State Yönetimi  Neden Önemli? (Redux ve Context Api)
1-Prop Driling (sadece küçük projelerde kullanmak mantıklıdır)
Oldukça comp olunca ve en altta 1 component  üstten 1 tane comp içindeki state in (örn isVisible,func_Delete..) içindeki dataya ihtiyacı olursa üstten alta bu datayı taşımam (propslar yardımıyla )gerekli olacak. Ama bu çok fazla comp. olan yapılarda işimi zora sokacak.Bunun yerine React içinde gelen Context Api (küçük projelrede)veya Redux(büyük projelerde kullanılır9 kullanmalıyım. Bunlar sayesinde 1 stati herhangi bir componentin içinde yerleştirmiyoruz bu stateti Redux için 1 tane STORE içinde tutuyoruz ContextApi için ise bu stateti Provider içinde tutuyoruz
2-ContextApi or Redux

 
 





React Context Api
Reducer, Action ve Dispatch

Action Nedir?
Context Apide, Provider Componentimizin içinde hangi işlemin gerçekleşeceğini ve hangi veriler gönderileceğini belirten JS Objesidir.
 2 türlü Property barındırır.
*Type: Hangi İşlem Gerçekleşecek (addUser,DeleteUser… gibi type daa belirterek bu type contextapi içinde anlaşılarak bu işlemi gerçekleştirecek)
* Payload : Hangi Veri Gönderilecek (contextapi içindeki statei değiştirmek istediğimiz için bu stati hangi verilere göre düzenleyeceğimizi veya o state i güncelleyeceğimiz için hangi verinin gönderilmesi gerektiğini belirtiyoruz )

Dispatch Nedir?
Actionları Context e göndermekle görevli bir Javascript fonksiyonudur. Provider stateinin içinde bulunur.

Reducer Nedir?
Gelen Actionun type nina göre state (seti) değiştirecek işlemlerden sorum JS Fonksiyonudur.

Çalışma mantığı:
Context ile sarmallayıp içine value (state array) gönderdiğimiz için her yerde bu arraya erişebilirim. Üstten altta doğru propslarra göndermem gerekmiyor.
Mesela en alt sağ taraftaki child componentte  butona bastım VE Action oluştu bu action içinde 2 property alıyorum *type: ne iş yapacaksın ? deleteUser mesela *payload id=1 ile payload içinde veri yazıyorum. Paket halindeki Actionu DİSPATCH ile context içine gönderiyorum. Contextapi içine gelen Action Reducer fonksiyonu ile action açılır ve işlem yapılır.(state güncellenir.)


 
Context.js
import React, {Component, useReducer} from 'react';

const UserContext = React.createContext();//ContextApi objesi oluşturuyorum
//Provider(sağlayıcı) , Consumer(tüketici)

const reducer=(state,action)=>{
    switch (action.type) {
        case "DELETE_USER":
            return {
                //spread operatörü js es6 ile gelen özellik
                ...state,//güncellenmemiş verimi dışarı çıkardım (paketten)

                users: state.users.filter(item=>action.payload !==item.id)
                //action.paylod gönderecegiz ve içinde id user.id olmayanaları yeni users içine atacagız
                //filtreleme işleme yaparak her bir users üzerinde gezinecegiz ve idsi eşit olmayanları users içinde
                //tutacagız eşit olmayanlar silinecek
            }
        case "ADD_USER":
            return {
                //spread operatörü js es6 ile gelen özellik
                ...state,//güncellenmemiş verimi dışarı çıkardım (paketten)
                users: [...state.users,action.payload]
                //users: state.users.push(action.payload) yapsam array içine direk ekleme yapamıyorum
                //burada bir array dönecegim ...state.users diyerek spread öperadörüyle önceki bilgileri
                //ve yeni bilgileri gelen action.payload dan gelen objeyi eklemiş olacagım ve array olara tekrar
                //users a eşitlemiş olacagım

            }
        default:
            //actiontype istenilen işlem için gelmezse eski stateimizi geri dönderiyoruz
            return state

    }
}



export class UserProvider extends Component { //burayı ayrı exportluyorum provider çağrımak için
    state = {
        users: [
            {
                id: 1,
                name: "Alper Öö",
                salary: "500",
                depart: "Bilişim"
            },
            {
                id: 2,
                name: "AhmetÖö",
                salary: "320",
                depart: "kilişim"
            },
            {
                id: 3,
                name: "Şahin Öö",
                salary: "100",
                depart: "Zilişim"
            }
        ],
        dispatch: action=>{//buranın dispatch fonksiyonunu istdigim yerde çağırıp içine action gönderecegim
            this.setState(state => reducer(state,action))
            //güncellenmemiş state mizi gelen action ile reducer içine göndereceğiz
            //setState diyerek bunu güncellemiş olacagız

        }
        //Actionları gönderdiğimiz fonksiyondur
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
AppStateEventChangeElementss.js

import React, {Component} from 'react';
import AppStateEventChangeElement from "./AppStateEventChangeElement";
// import PropTypes from 'prop-types';
import UserConsumer from "./context"; //Sarmallamıştım burada çağrııyorum value değerini kullanmak için
class AppStateEventChangeElementss extends Component {
    render() {
        //ContextApi den dolayı bunlar üstten gelmediği için kaldırdım
        // const {users,func_deleteUser} = this.props; //props olarak dizim state içindekiler geldi
        // console.log("alper");
        // console.log(users);

        return (
            //Context.js içindeki consumer çağgırmalıymki value kullanmalıyım
            <UserConsumer>
                {
                    //Context.js içindeki yani providerdaki state this value gelecek
                    value => {
                        const {users} = value; //value içindeki users arrayini çektim
                        return (
                            <div>
                                {
                                    users.map(item => {
                                        return (
                                            <AppStateEventChangeElement 
			         key={item.id}
                                                                        id={item.id}
                                                                        name={item.name}
                                                                        salary={item.salary}
                                                                        depart={item.depart}
                                                // func_deleteUser={func_deleteUser} //Artık bunu göndermeyecegiz Context Apidendolayı
                                            />
                                        )
                                    })
                                }
                            </div>
                        );
                    }
                }

            </UserConsumer>
        )
        // return (
        //     <div>
        //         {
        //             users.map(item => {
        //                 return (
        //                     <AppStateEventChangeElement key={item.id}
        //                                                 id={item.id}
        //                                                 name={item.name}
        //                                                 salary={item.salary}
        //                                                 depart={item.depart}
        //                                                 // func_deleteUser={func_deleteUser} //Artık bunu göndermeyecegiz Context Apidendolayı
        //                     />
        //                 )
        //             })
        //         }
        //     </div>
        // );
    }
}

//Buraya gelen verileri kontrol etmek için proptype kullanıyorum
//Ne geliyor ?
//func_deleteUser fonksiyonu ve users arrayi

// Yukardan Context Api kullandıgı için veri gelmiyor o yüzden kaldırdım
// AppStateEventChangeElementss.proptype = {
//     users: PropTypes.array.isRequired,//Mutlaka bu arraytipinde olmalı ve gelmelidir
//     func_deleteUser:PropTypes.func.isRequired //mutlaka fonksiyon gönderilmeli ve kesinlikle gelmeli zorunluluk koyuyorum
// }

export default AppStateEventChangeElementss;

AppStateEventChangeElement.js
import React, {Component} from 'react';
import PropTypes from "prop-types";//props ekleyerek veri kontrolü yapacagım boş gelmişse default deger ata gibi

//Componentin state normalde değiştirilmez ama ben setState yaparak değiştirieblirim
//onclick h4 içindekine tıklanınca değiştirilmeyen state içindeki isVisible değerini değiştirelim

import UserConsumer from "./context";

class AppStateEventChangeElement extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok2",
        depart: "Bilgi Yok3"
    }
    onClickEvent = (e) => {
        // this.state = {
        //     isVisible: false
        // }
        //Bu kullanım yanlıştır değiştiremiyoruz hazır statei
        //setState Kullanmalıyım
        this.setState({
            isVisible: !this.state.isVisible
            //false ise true true ise false yap
        })
    }
    onDeleteUser = (dispatch, e) => {
        //Props den gelen Users yani A
        // ppStateEventChangeElementss den gelen func ve id değerini aldım
        // const {id, func_deleteUser} = this.props; //Yukardan bu func geldiği için alıyorum id siyle birlikte
        //func_deleteUser(id);
        //ContextAPiden dolayı bukısım propstan gelmeyecem kaldırdım çünkü bu verileri  consumerden alacagım
        const {id} = this.props; //Users çoklama sayfası olan (AppStateEventChangeElementss içinden gönderilen id yi aldım)
        //Consumerdan alacagımız Dispatch gelecek
        //DİSPATCH ile gönderme işlemidir.
        console.log(id);

        dispatch({type: "DELETE_USER", payload: id});

    }

    render() {
        const {name, salary, depart} = this.props;
        const {isVisible} = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value; //value içinde gelen dispatch almak istiyorum
                        return (

                            <div className="col-md-8 mb-4">
                                <div className="card"
                                     style={isVisible ? {backgroundColor: "#62848d", color: "white"} : null}>
                                    <div className="card-header d-flex justify-content-between">

                                        {/*<p>Bu bir stateobjesidir ve içindeki test propertyni yazdırılmasıdır=>{this.state.test}</p>*/}
                                        <h4 className="d-inline" onClick={this.onClickEvent}
                                            style={{cursor: "pointer"}}>Göster/Gizle</h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} className="far fa-trash-alt"
                                           style={{cursor: "pointer"}}></i>
                                    </div>

                                    {
                                        //isVisible true ise card body gösterilecek değilse null
                                        isVisible ?
                                            <div className="card-body">
                                                <p className="card-text">{name}</p>
                                                <p className="card-text">{depart}</p>
                                                <p className="card-text">{salary}</p>
                                            </div> : null
                                    }


                                </div>
                            </div>

                        );

                    }

                }
            </UserConsumer>
        );
    }
}

AppStateEventChangeElement.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    depart: PropTypes.string.isRequired,
    // func_deleteUser: PropTypes.func.isRequired
    // id:PropTypes.number.isRequired

}
export default AppStateEventChangeElement;

AddUser.js
import React, {Component} from 'react';
import posed from 'react-pose'; //Animation için npm instal react-pose yaparak projeye dahi ettim buraya importluyorum
import uniqid from 'uniqid';
import UserConsumer from "../context";//Action dispatch oluşturup context.js içine actionu göndermek için buraya consumer yapmalıyım
//Animasyon divimi oluşturdum içine css özelliklerini verebilirim
const Animation = posed.div({
    visible: { //pose-visible
        opacity: 1,
        applyAtStart: {display: "block"}
    },
    hidden: { //pose-hidden
        opacity: 0,
        applyAtEnd: {display: "none"}
    }
});

class AddUser extends Component {
    state = {
        visible: true,
        name: "",
        department: "",
        salary: "",


    }
    func_changeVisibility = (e) => {
        //bu fonksiyon çalıştııgında state içindeki visible özelliğini değiştir trueysa false false ise true yap
        this.setState({visible: !this.state.visible})

    }
    // func_changeName=(e)=>{
    //    this.setState({name: e.target.value}) //değişen değeri her defasında al (value kısmını alıyorum)
    //     //console.log(e.target.value)
    // }
    // func_changeDepart=(e)=>{
    //     this.setState({name: e.target.value}) //değişen değeri her defasında al (value kısmını alıyorum)
    //     //console.log(e.target.value)
    // }
    // func_changeSalary=(e)=>{
    //     this.setState({name: e.target.value}) //değişen değeri her defasında al (value kısmını alıyorum)
    //     //console.log(e.target.value)
    // }
    //Her input için ayrı fonk yazmak yerine 1 tane yazıp üzerindne işlem yapaılım
    //gelen inputun name değerine veya id degerine göre işlem yaptırabilirim

    func_changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //input name="salary" olan geldiginde [e.target.name] salary olacak

        })

    }
    addUser = (dispatch,e) => {
        // Form submit oldugunda buraya düşüyor ve sayfa yenileniyor girilen degerler
        // get ile sayfa linkinde görünüyor biz bu yenilenmeyi engelleemek istiyoruz
        // sayfa yenilemeden bu işlem yapsın
        // http://localhost:3000/?name=asd&department=asdd12&salary=saddd
        // Javascript de engellemek için
        e.preventDefault();//sayfa yenilenmeden(submit edilmeden fonksiyonumuzu çalıştırdık) ve get ile linklenmeden veri
        //formun default değerini değiştirmiş olduk
        console.log("test");
        // console.log(uniqid()); // -> 4n5pxq24kpiob12og9
        // console.log(uniqid(), uniqid()); // -> 4n5pxq24kriob12ogd, 4n5pxq24ksiob12ogle

        const {name, department, salary} = this.state;
        //Yeni bir obje oluşturuyorum
        const newUser = {
            id: uniqid(),
            name: name,
            salary: salary,
            department: department
        }//aynı isimli değişken dikkat edersek aynı ise alttaki gibi yazabilirim
        // const newUser2 = {
        //     id:uniqid(),
        //     name,
        //    salary,
        //    department
        // }
        console.log(newUser);
        // console.log(newUser2);
        //Yeni objenin bir sıkıntısı var normalde context içinde statedeki users içinde her users arrayinin id değeri
        // var ama bunun yok, uniq bir id degeri alması gereklidir
        //Uniq id npm packadge ile üretmem gereklidir
        // 3 farklı package yöntemi var 1-react js generate unique id 2- react uniqueid 3- uniqid
        //npm install uniqid
        //https://www.npmjs.com/package/react-id-generator
        //https://www.npmjs.com/package/uniqid (encok kullanılan)

        dispatch({type: "ADD_USER", payload: newUser});//bir action oluşturarak gönderiyorum


    }

    render() {
        const {visible, name, salary, department} = this.state; //diye ustte oluşturdugum bir stateyi visible değişkenin içine atıyorum
        return <UserConsumer>
            {
                value => {
                    const {dispatch} =value;//context içindeki dispatch aldım
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.func_changeVisibility}
                                    className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose={visible ? "visible" : "hidden"}>
                                {/*Animation objesinnin içine true ise pose visible çalış değişse pose hidden çalış diyorum*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
                                            {/*formun submit butonuna basıldıgında çalışacak kısmı belirledim*/}
                                            {/*ama parametreleri göndermemem gerek yok state içinde zaten bu bilgiler  var*/}
                                            <div className="form-group">
                                                <label htmlFor="name">İsim</label>
                                                <input type="text"
                                                       name="name"
                                                       id="id"
                                                       placeholder="Enter Name"
                                                       className="form-control"
                                                       value={name}
                                                       onChange={this.func_changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Departmanı</label>

                                                <input
                                                    type="text"
                                                    name="department"
                                                    id="department"
                                                    placeholder="Enter Department"
                                                    className="form-control"
                                                    value={department}
                                                    onChange={this.func_changeInput}/>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="salary">Salary</label>
                                                <input type="text"
                                                       name="salary"
                                                       id="salary"
                                                       placeholder="Enter Salary"
                                                       className="form-control"
                                                       value={salary}
                                                       onChange={this.func_changeInput}/>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">Add User</button>

                                        </form>

                                    </div>
                                </div>
                            </Animation>
                        </div>

                    );
                }
            }
        </UserConsumer>

    }
}


export default AddUser;
Component Life Cycle  and LifeCycle Methods(Yaşam dmgüsü methodları)

Önceden yazdığımız tüm componentlerin 1 tane render fonk olması gerekiyordu. Component classından miras aldığımız için otomatik geliyordu
 
Biz bu methodu kendimize göre override ediyoruz ve buna göre componetleri yerleştriiyoruz.Ancak daha farklı iş geldiğinde farklı işler yapmak istiyorusak yaşam döngülerini öğrenmek zorundayız.
//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
Mounting
1 component(çünkü bunlar bir class) sayfaya yerleştirilmesi Mounting deniliyor ve ilk başta biz yazmasakta constructor çağrılıyor.Constructor çağrılıyor ve buraya propsları geçirip statei burada başlatabiliyoruz. Aynı zamanda error function kullanmıyorsak functionları bind ediyoruz daha sonra constructor bittikten sonra bizim ilk işlemimiz bu componentin render işlemi (JSX formatında) dir. Render işlemi bittikten sonra componentimiz sayafa mount ediliyor yani sayfaya yerleştiriliyor ve hemen ardından LifeCycle methodumuz çalışıyor (componentDidMount) yerleştirildi demek oluyor zaten
Updating
AppState ana componentte veyya child componentlerde update ediliyorsa (statei değişiyorsa mesela(bu state değişimi diğer componentlerin propslarınıda etkiliyorsa ama)) updating işlemi gerçekleşir veya 
Herhangi bir componentte setState ile değişikliğe uğrarsa veyya forceUpdate kullanılırsa updating işlemidir. Devamında render ver sayfaya component eklenmiş olur(componentDidUpdate)
Unmounting (Bir componentin sayfadan kaldırılma işlemidir.)
Tek bir method çalışıyor ama şuan güncel olarak kullanmayın diyorlar

 
Sadece bu kadar method yok yukarıdaki foto gibi altta methodlar var

REACT REST APİ http REQUEST


 

https://github.com/typicode/json-server
den projeme npm install -g json-server 
ile fake rest api dahil ettim sonra db.json diye ana bir dizine dosya oluşturdum içine users: arrayımı yazdım 
json-server –watch db.json ile rest api başlatmış oldum
 
Routes
Based on the previous db.json file, here are all the default routes. You can also add other routes using --routes.
Plural routes
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
Singular routes
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
Filter
Use . to access deep properties
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
Paginate
Use _page and optionally _limit to paginate returned data.
In the Link header you'll get first, prev, next and last links.
GET /posts?_page=7
GET /posts?_page=7&_limit=20
10 items are returned by default
Sort
Add _sort and _order (ascending order by default)
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
For multiple fields, use the following format:
GET /posts?_sort=user,views&_order=desc,asc
Slice
Add _start and _end or _limit (an X-Total-Count header is included in the response)
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
Works exactly as Array.slice (i.e. _start is inclusive and _end exclusive)
Operators
Add _gte or _lte for getting a range
GET /posts?views_gte=10&views_lte=20
Add _ne to exclude a value
GET /posts?id_ne=1
Add _like to filter (RegExp supported)
GET /posts?title_like=server
Full-text search
Add q
GET /posts?q=internet
Relationships
To include children resources, add _embed
GET /posts?_embed=comments
GET /posts/1?_embed=comments
To include parent resource, add _expand
GET /comments?_expand=post
GET /comments/1?_expand=post
To get or create nested resources (by default one level, add custom routes for more)
GET  /posts/1/comments
POST /posts/1/comments
Database
GET /db
Homepage
Returns default index file or serves ./public directory
GET /
Extras
Static file server
You can use JSON Server to serve your HTML, JS and CSS, simply create a ./public directory or use --static to set a different static files directory.
mkdir public
echo 'hello world' > public/index.html
json-server db.json
json-server db.json --static ./some-other-dir
Alternative port
You can start JSON Server on other ports with the --port flag:
$ json-server --watch db.json --port 3004
Access from anywhere
You can access your fake API from anywhere using CORS and JSONP.
Remote schema
You can load remote schemas.
$ json-server http://example.com/file.json
$ json-server http://jsonplaceholder.typicode.com/db
Generate random data
Using JS instead of a JSON file, you can create data programmatically.
// index.js
module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }
  return data
}
$ json-server index.js
Tip use modules like Faker, Casual, Chance or JSON Schema Faker.
HTTPS
There are many ways to set up SSL in development. One simple way is to use hotel.
Add custom routes
Create a routes.json file. Pay attention to start every route with /.
{
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
}
Start JSON Server with --routes option.
json-server db.json --routes routes.json
Now you can access resources using additional routes.
/api/posts # → /posts
/api/posts/1  # → /posts/1
/posts/1/show # → /posts/1
/posts/javascript # → /posts?category=javascript
/articles?id=1 # → /posts/1
Add middlewares
You can add your middlewares from the CLI using --middlewares option:
// hello.js
module.exports = (req, res, next) => {
  res.header('X-Hello', 'World')
  next()
}
json-server db.json --middlewares ./hello.js
json-server db.json --middlewares ./first.js ./second.js
CLI usage
json-server [options] <source>

Options:
  --config, -c       Path to config file           [default: "json-server.json"]
  --port, -p         Set port                                    [default: 3000]
  --host, -H         Set host                             [default: "localhost"]
  --watch, -w        Watch file(s)                                     [boolean]
  --routes, -r       Path to routes file
  --middlewares, -m  Paths to middleware files                           [array]
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                           [boolean]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
  --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
  --snapshots, -S    Set snapshots directory                      [default: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)         [default: "id"]
  --foreignKeySuffix, --fks  Set foreign key suffix, (e.g. _id as in post_id)
                                                                 [default: "Id"]
  --quiet, -q        Suppress log messages from output                 [boolean]
  --help, -h         Show help                                         [boolean]
  --version, -v      Show version number                               [boolean]

Examples:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server
You can also set options in a json-server.json configuration file.
{
  "port": 3000
}
Module
If you need to add authentication, validation, or any behavior, you can use the project as a module in combination with other Express middlewares.
Simple example
$ npm install json-server --save-dev
// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
$ node server.js
The path you provide to the jsonServer.router function is relative to the directory from where you launch your node process. If you run the above code from another directory, it’s better to use an absolute path:
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
For an in-memory database, simply pass an object to jsonServer.router().
To add custom options (eg. foreginKeySuffix) pass in an object as the second argument to jsonServer.router('db.json', { foreginKeySuffix: '_id' }).
Please note also that jsonServer.router() can be used in existing Express projects.
Custom routes example
Let's say you want a route that echoes query parameters and another one that set a timestamp on every resource created.
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
Access control example
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
 if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
Custom output example
To modify responses, overwrite router.render method:
// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}
You can set your own status code for the response:
// In this example we simulate a server side error response
router.render = (req, res) => {
  res.status(500).jsonp({
    error: "error message here"
  })
}
Rewriter example
To add rewrite rules, use jsonServer.rewriter():
// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
Mounting JSON Server on another endpoint example
Alternatively, you can also mount the router on /api.
server.use('/api', router)
API
jsonServer.create()
Returns an Express server.
jsonServer.defaults([options])
Returns middlewares used by JSON Server.
•	options
o	static path to static files
o	logger enable logger middleware (default: true)
o	bodyParser enable body-parser middleware (default: true)
o	noCors disable CORS (default: false)
o	readOnly accept only GET requests (default: false)
jsonServer.router([path|object], [options])
Returns JSON Server router.
•	options (see CLI usage)
Deployment
You can deploy JSON Server. For example, JSONPlaceholder is an online fake API powered by JSON Server and running on Heroku.


Json server Kurma
npm install -g json-server
Json server başlatma
json-server --watch db.json     -  json-server --watch restapi/db.json --port 3040
Json server başlatma port vererek
json-server --watch db.json –port 3040

  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000

db.json içi
{
  "users" : [
    {
      "id": 1,
      "name": "Alper Öö",
      "salary": "500",
      "depart": "Bilişim"
    },
    {
      "id": 2,
      "name": "AhmetÖö",
      "salary": "320",
      "depart": "kilişim"
    },
    {
      "id": 3,
      "name": "Şahin Öö",
      "salary": "100",
      "depart": "Zilişim"
    }
  ]
}


Uygulama içinden buraya erişmek için AXİOS Lib indirdim

Npm install axios
Daha sonra import ile sayfama ekliyecegim

// Async-wait fonksiyonu
// Async-wait fonksiyonu
const axios =require('axios');
// console.log(axios);
getData=async ()=>{
    await axios.get("http://localhost:30402")
        .then((responsive)=>{
            console.log(responsive);
        })
        .catch((e)=>console.log(e))
};
//getData();
//console.log(("Verileri çekmden Burayı asla gösterme"));

//node async-wait.js ile terminalden bu sayfayı çağırdıgımda koda göre önce rest den veriyi çekip sonra consolda
//Verileri çekmeden Burayı gösterme yazması lazım ama olmuyor önce consolu bastı sorna veriyi cekti
//bunu nasıl çözeceğim?
// ASNYC - AWAİT  ile bunu çözerim

getShow= async ()=>{
    await getData(); //burası bitmeden aşağı geçmedi
    console.log(("Verileri çekmden Burayı asla gösterme"));
}
getShow();

//Şimdi oldu
//ASYNC await koydugumuz yer kod blogunu orada durdurup bitmesini bekliyor
React Router – Router Route kullanımı
Npm install react-router-dom 	
Projemize dahil ediyoruz.
Router Neden Kullanırız ?
SPA uygulamalarda sayfa içerisinde gezinmek için kullandığımız yapılardır.
Aşağıdaki kod örneğinde olduğu gibi src/App.js dosyasında react-router-dom ‘ u projenize dahil edebilirsiniz.
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
React-Router Kullanımı
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
          <Route path="/hakkimizda" component={Hakkimizda} />                            
          <Route path="/kullanicilar" component={Kullanicilar} />           
          <Route path="/" component={Anasayfa}>
    </Router>
  );
}
function Hakkimizda() {
  return <h2>Hakkımızda Sayfası</h2>;
}

function Kullanicilar() {
  return <h2>Kullanıcılar Sayfası</h2>;
}

function Anasayfa() {
  return <h2>Ana Sayfa</h2>;
}
Router : Tanımlanan Yerlere Sayfaların Render Edileceğini Bildirdik.
Route : Yeni Bir Sayfa Tanımı Oluşturduk.
Route componentinin path özelliği: Tarayıcıdan hangi url ile erişeceğimizi belirtir.
Route componentinin özelliği : İlgili path özelliği geldiğinde hangi componenti render edeceğini belirtir.
react router kullanarak,sayfaları router tag’ları arasına render edeceğimizi ve ilgili route ların yol tanımlamalarını ve render edeceği sayfaları belirlemiş olduk.


