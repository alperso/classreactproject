import React, {Component} from 'react';
//import posed from 'react-pose'; //Animation için npm instal react-pose yaparak projeye dahi ettim buraya importluyorum
//import uniqid from 'uniqid';//uniqe id değerini add state yaparken ekliyoruz ama db.json gelince burayı kaldırdım
import UserConsumer from "../context";//Action dispatch oluşturup context.js içine actionu göndermek için buraya consumer yapmalıyım
//Animasyon divimi oluşturdum içine css özelliklerini verebilirim
import axios from "axios";

class updateUser extends Component {
    state = {
        // visible: true,
        name: "",
        depart: "",
        salary: "",
        error:false
    }
    func_changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //input name="salary" olan geldiginde [e.target.name] salary olacak
        })

    }
    func_validationForm = (e)=>{
        const {name,salary,depart}=this.state;
        if(name==="" || depart===""||salary===""){
            return false;
        }
        return true;

    }
    func_updateUser = async (dispatch, e) => {//async yapıyorum çünkü restden gelen veriyi çekmeden işlem yapmasın istiyorum

        e.preventDefault();//sayfa yenilenmeden(submit edilmeden fonksiyonumuzu çalıştırdık) ve get ile linklenmeden veri
        const {id}=this.props.match.params;//güncellenecek id aldık
        const {name, depart, salary} = this.state; //idmiz değişmeyecegi için axiosla gönderecegiz
        const updatedUser={
            name: name,
            salary: salary,
            depart: depart

        }
        if(!this.func_validationForm()){
            //bu validate formdan true olacaksa yani error meydana geldiyse
            this.setState({error:true}) //error true yaptım ve arayüzde kullanacagım
            return ; //eğer error geldiyse aşağıları okumadan çıksın diye returnledim
        }



        const response = await axios.put(`http://localhost:3040/users/${id}`, updatedUser);//verimizi gönderdik webservise kaydettik
        //bu işlem eklendiğinde add_user actionuyla gelen datayı state e kaydettik
        dispatch({type: "UPDATE_USER", payload: response.data});//bir action oluşturarak gönderiyorum

        //Redirect
        this.props.history.push("/");

    }

    componentDidMount=async()=> {
        const {id}=this.props.match.params;//sayfaya gelen id aldık
        const response=await axios.get(`http://localhost:3040/users/${id}`);//gelen tekbir obje olacak
        const {name,salary,depart}=response.data;//gelen objenin içinden çektim

        this.setState({
            name,
            salary,
            depart
        });


    }


    render() {
        // console.log(this.props.match); //bu sayafa gelen link ile edit/:id değerilerini görüyorum
        // console.log(this.props.match.params.id);//benim içeriklerim param içinde geliyor ve id sini çekiyorum
        const { name, salary, depart,error} = this.state; //diye ustte oluşturdugum bir stateyi visible değişkenin içine atıyorum
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;//context içindeki dispatch aldım
                    return (
                        <div className="col-md-8 mb-4">


                            <div className="card">
                                <div className="card-header">
                                    <h4>Update User Form</h4>
                                </div>
                                <div className="card-body">
                                    {
                                        //error truyse uyarı ver yoksa null yap
                                        error ? <div className="alert alert-danger">
                                            Lütfen Bilgilerinizi Kontrol Edin!
                                        </div> : null
                                    }
                                    <form onSubmit={this.func_updateUser.bind(this, dispatch)}>
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
                                        <button type="submit" className="btn btn-primary btn-block">Update User
                                        </button>

                                    </form>

                                </div>
                            </div>

                        </div>

                    );
                }
            }
        </UserConsumer>

    }
}


export default updateUser;

