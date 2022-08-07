import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props); //yazmazsak undefined olur
        console.log(this.props);
        //biir state oluşturuyorum
        this.state={
            a:10
        }
        console.log("Constructor çalıştı");
    }

    componentDidMount() {
        //bu component mount edildikten (yani sayfaya yüklendikten hemen sonra çalışır)
        console.log("ComponentDidMount bitti ve component sayafaya yerleşti");
        //Bunu nerede kullanırız?
        //kendi component içimdeki statei değiştirmek isityorum . ve uzaktaki restapi  dan aldıgım json dosyasıyla
        //güncellemek istiyorum yani bu methotda API isteklerimizi kullanırız
        this.setState({a:20}) //stateimizdeğiştiği için tekrar render fonksiyonumuz çalışıyor

    }

    componentDidUpdate(prevProps, prevState) {
        //GÜNCELLEME İŞLEMİMİZ PROPS VEYA STATE DEĞİŞTİĞİNDE BU FONKSİYON ÇALIŞACAK
        //propsumuz deiştiği zaman üstteki component state değiştiği zaman üstteki component render edilıyor
        //daha sonra propsumuz mesela değişiyor //ÖNCEKİ STATETİMİZ prevProps ve ÖNCEKİ STATETİMİZ(güncellendikten sonra)
        //prevState  PROPS VEYA STATE HANGİSİ DEĞİŞMİŞSE BURAYA GLEİYOR
        console.log("componentDidUpdate ÇALIŞTI");
        //RENDER 2 DEFA ÇALIŞTIGI için (state timizi setState yaptıgımız için bu method çalışmış oldu)
    }

    //---------------SHOULDCOMPONENT
    //updating işlemi içinde kullanılan method ne için kullanılır?
    //Ben eğeer componentimin bir daha render rendilmesini istemiyorsam kullanırım
    //performans artışı saglar - bu methodu yazmazsak true default döner
    //örn:
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }
    shouldComponentUpdate() {
        // 1 kere render edildikten sonra çalışır  true dönerse 2. rendera devam eder false dönerse etmez
        console.log("shouldComponentUpdate ÇALIŞTI");
         return true; //döndük setState ile güncellediğim state a:20 çalışır
        //return false; //componentDidUpdate çalışmamış olur
    }
    //--------------Unmounting - Kullanılan component sayfadan kaldırılmadan hemen önce çalışır
    //Burada component kaldırmadıgım için AppStateEventChangeElement.js de kullandım
    // componentWillUnmount() {
    //     console.log("componentWillUnmount Çalıştı");
    //     Aşagıda oluşturdugum users componentleri kaldırmadan önce işlem yapmak için kullanılır
    //     Mesela bir aboneliği iptal etmeden üyeliklerini kaldırmak istiyorsam burada işlem yaparım
    // }


    render() {
        console.log("Render methodu Mount edilirken çalıştı");
        //render methodu sadece JSX Formatında(html ile veri yazacaksam içine) veri göndereceksem kullanılmalıdır.
        //burada this.setState yapamam sonsuz döngüye girer
        return (
            <div>
                
            </div>
        );
    }
}

export default Test;