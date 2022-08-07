import logo from './logo.svg';
import './App.css';
import NavBar from "./layout/NavBar"; //Bu bir componetn oluşturumak için sınıfı çagırdım
import User from "./components/User";//Componentimi import ettim
import List from "./components/List";
import {Component} from "react";


class AppProps extends Component {
    render() {
        return (
            <div className="container">
                {/*componentin içine veri gönderiyorum*/}
                <NavBar title="UserApp"/>
                <hr/>
                //Dinamik olarak apppros.js içinden list.js içindeki componente veri gönderebilirim
                <List
                name="Alper"
                twoname="Sahin"
                salary="500"
                />
                <hr/>
                <List
                    name="İkinci List"
                    twoname="İkinci saoyad"
                    salary="2222"
                />
                <hr/>
                <List />
            </div>

        );
    }
}

export default AppProps;
