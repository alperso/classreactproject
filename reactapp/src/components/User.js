//rcc diyerek react snipcets den kısayol olarak Bu kısmın Component ana yapısınının kısayoluyla getirerek
//doldurmaya başlayabilirim
//COMPONENT ANA YAPISI

import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <button>Gönder</button>
                </form>
            </div>
        );
    }
}

export default User; //başka claslarda kullanmak için export edilmesi gereklidir.


