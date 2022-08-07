import React, {Component} from 'react';
import PropTypes from "prop-types";//props ekleyerek veri kontrolü yapacagım boş gelmişse default deger ata gibi

//Componentin state normalde değiştirilmez ama ben setState yaparak değiştirieblirim
//onclick h4 içindekine tıklanınca değiştirilmeyen state içindeki isVisible değerini değiştirelim

import UserConsumer from "./context";
import axios from "axios";
import {Link} from "react-router-dom";

//fetch api

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
    onDeleteUser = async (dispatch, e) => {
        //Props den gelen Users yani A
        // ppStateEventChangeElementss den gelen func ve id değerini aldım
        // const {id, func_deleteUser} = this.props; //Yukardan bu func geldiği için alıyorum id siyle birlikte
        //func_deleteUser(id);
        //ContextAPiden dolayı bukısım propstan gelmeyecem kaldırdım çünkü bu verileri  consumerden alacagım
        const {id} = this.props; //Users çoklama sayfası olan (AppStateEventChangeElementss içinden gönderilen id yi aldım)
        //Consumerdan alacagımız Dispatch gelecek
        //DİSPATCH ile gönderme işlemidir.
        // console.log(id);


        // const response=await axios.delete(`http://localhost:3040/users/${id}`); //zaten sonuç null döndüğü için const ile değişken
        // //yapmama gerek tyok
        await axios.delete(`http://localhost:3040/users/${id}`);//db.json restapiden kaldırdık
        dispatch({type: "DELETE_USER", payload: id});//stateden kaldırdık

    }
    componentWillUnmount() {//Component kaldırılmadan önce
        console.log("componentWillUnmount Çalıştı");
        // Aşagıda oluşturdugum users componentleri kaldırmadan önce işlem yapmak için kullanılır
        // Mesela bir aboneliği iptal etmeden üyeliklerini kaldırmak istiyorsam burada işlem yaparım veya kaynakları
        //serbest bırak makiçin kullanılır
    }


    render() {
        const {id,name, salary, depart} = this.props;
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
                                                {/*//altgr + virgül ile tek tırnak ile update yapmalıyım*/}
                                                <Link to={`/edit/${id}`} className="btn btn-dark btn-block">Edit</Link>
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
    depart: PropTypes.string.isRequired
    // func_deleteUser: PropTypes.func.isRequired
    // id:PropTypes.number.isRequired

}
export default AppStateEventChangeElement;