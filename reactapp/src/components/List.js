import React, {Component} from 'react';
import PropTypes from "prop-types";//props ekleyerek veri kontrolü yapacagım boş gelmişse default deger ata gibi

class List extends Component {
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        twoname: "Bilgi Yok"
    }

    render() {

        //Destructing  ->JS in bir özelliğidir
        const {name, twoname, salary} = this.props; ///this.props içinden bu degerleri al
        return (
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-line">{name}</h4>
                        <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>
                </div>
                <div className="card body">
                    <ul>

                        {/*Props dan geleni değişkene atmadan ekrana bastırma*/}
                        <li>İsim: {this.props.name} <i className="far fa-trash-alt"></i></li>
                        <li>İkinci Ad:{this.props.twoname}</li>
                        <li style={{cursor: "pointer"}}>Meslek: {this.props.salary}</li>


                        <hr/>
                        {/*Props dan geleni değişkene atarak bastırma  - default değerilerini render üstünde tanımladım*/}
                        <li>İsimDestructing: {name}</li>
                        <li>İkinci AdDestructing:{twoname}</li>
                        <li>MeslekDestructing: {salary}</li>

                    </ul>
                </div>
                <div className="card body">
                    <div className="cart-text">Maaş: {salary}</div>
                    <p className="card-text">{salary}</p>
                </div>

            </div>
        );
    }
}

//Liste gönderilen proplar bir obje olacak ve deger gonderilecek diyorum
List.propType = {
    name: PropTypes.string.isRequired, //name string olacak ve mutlaka gönderilmesi gerekecek diyorum
    twoname: PropTypes.string,
    salary: PropTypes.string

}
// List.defaultProps={
//     name:"Bilgi Yok",
//     salary:"Bilgi Yok",
//     twoname:"Bilgi Yok"
//
// }
List.defaultProps = {}
export default List;