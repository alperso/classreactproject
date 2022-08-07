import React, {Component} from 'react';
import posed from 'react-pose'; //Animation için npm instal react-pose yaparak projeye dahi ettim buraya importluyorum
//import uniqid from 'uniqid';//uniqe id değerini add state yaparken ekliyoruz ama db.json gelince burayı kaldırdım
import UserConsumer from "../context";//Action dispatch oluşturup context.js içine actionu göndermek için buraya consumer yapmalıyım
//Animasyon divimi oluşturdum içine css özelliklerini verebilirim
import axios from "axios";
import NavBar from "../layout/NavBar";
//restapi için
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
        depart: "",
        salary: "",
        error:false


    }
    func_changeVisibility = (e) => {
        //bu fonksiyon çalıştııgında state içindeki visible özelliğini değiştir trueysa false false ise true yap
        this.setState({visible: !this.state.visible})

    }
    func_validateForm=()=>{
        //değerler boşmu dolu mu diye kontrol ediyorum
        const {name,salary,depart}=this.state;
        if(name==="" || salary ==="" || depart===""){ //değerlerini kontrol ettirdim === ın amacıdır
            return false;
        }
        return true;
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
    addUser = async (dispatch,e) => {//async yapıyorum çünkü restden gelen veriyi çekmeden işlem yapmasın istiyorum
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

        const {name, depart, salary} = this.state;
        //Yeni bir obje oluşturuyorum
        const newUser = {
            //id: uniqid(), //artık uniqe tanımlamamıza gerek yok db.json kendi otomatik değer uniq tanımlayacak
            name: name,
            salary: salary,
            depart: depart
        }//aynı isimli değişken dikkat edersek aynı ise alttaki gibi yazabilirim
        // const newUser2 = {
        //     id:uniqid(),
        //     name,
        //    salary,
        //    department
        // }
        //console.log(newUser);
        // console.log(newUser2);
        if(!this.func_validateForm()){
            //bu validate formdan true olacaksa yani error meydana geldiyse
            this.setState({error:true}) //error true yaptım ve arayüzde kullanacagım
            return ; //eğer error geldiyse aşağıları okumadan çıksın diye returnledim
        }
        //Yeni objenin bir sıkıntısı var normalde context içinde statedeki users içinde her users arrayinin id değeri
        // var ama bunun yok, uniq bir id degeri alması gereklidir
        //Uniq id npm packadge ile üretmem gereklidir
        // 3 farklı package yöntemi var 1-react js generate unique id 2- react uniqueid 3- uniqid
        //npm install uniqid
        //https://www.npmjs.com/package/react-id-generator
        //https://www.npmjs.com/package/uniqid (encok kullanılan)
        //dispatch({type: "ADD_USER", payload: newUser});//bir action oluşturarak gönderiyorum
        const response=await axios.post("http://localhost:3040/users",newUser);//verimizi gönderdik webservise kaydettik
//bu işlem eklendiğinde add_user actionuyla gelen datayı state e kaydettik
        dispatch({type: "ADD_USER", payload: response.data});//bir action oluşturarak gönderiyorum

        //Redirect ile anasayfaya yani root sayfasına yönlendir
        this.props.history.push("/");

    }

    render() {
        const {visible, name, salary, depart,error} = this.state; //diye ustte oluşturdugum bir stateyi visible değişkenin içine atıyorum
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
                                        {
                                            //error truyse uyarı ver yoksa null yap
                                            error ? <div className="alert alert-danger">
                                                Lütfen Bilgilerinizi Kontrol Edin!
                                            </div> : null
                                        }
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
                                                <label htmlFor="depart">Departmanı</label>

                                                <input
                                                    type="text"
                                                    name="depart"
                                                    id="depart"
                                                    placeholder="Enter Department"
                                                    className="form-control"
                                                    value={depart}
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
