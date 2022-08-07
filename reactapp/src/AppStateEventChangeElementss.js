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
                                            <AppStateEventChangeElement key={item.id}
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
