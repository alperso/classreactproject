import React from "react"; //React ti sayfamızıa dahil ettik
import PropTypes from "prop-types";

import {

    Link
} from "react-router-dom";

// 1.Kullanımı
// function NavBar() {
//     return(
//
//             <div className="container">
//             <h3> UserApp Navbar Component</h3>
//         </div>
//     )
//
// }
// 2.Kullanım
//Fonksyion oldugu için props içine tanımlayabiliyorum ama class için farklı List.js içine bak
const NavBar=(props)=> {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
            <a href="/" className="navbar-brand">{props.title}</a>



                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active p-3 "><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item p-3" ><Link to="/add" className="nav-link" style={{color:"white"}}>Add User</Link></li>
                    <li className="nav-item p-3"><Link to="/github" className="nav-link">Project Files</Link></li>

                </ul>


        </nav>

    )

}
NavBar.propTypes={
    //eğer bu componenti göndereceksem kesinlikle title strin bir deger göndermelyim (yukarıda kütüphanesini ekledim)
    title:PropTypes.string.isRequired   // Componente gönderilecek parametreinin tipini belirleyebiliyorum ve mutlaka gönderilmleidir diyorum

}
//Navbar gönderilmezse
NavBar.defaultProps={
    title:"Default App"

}
export default NavBar;//Dışarıda kullanacagım dedik //JSF FORMATINDA 1 PARENT DÖNÜYOR VE BUNU SAYFAMIZDA KULLANIRIZ
//Function Componenttir