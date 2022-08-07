import React, {Component} from 'react';

class State extends Component {

    //altta onclick eventinie git demiştim altta html tıklandıgında burası tetiklenecek e ile yakalıyorum
    onClickEvent(e) {
    // console.log(e.target); //diyerek bu eventin nerede oluştutugu bilgisini alacagım
    //     //   <h4 className="d-inline">Alper</h4> geliyor
    //     //
    //     console.log(("altest"));

        console.log(this); //undifined veriyor bu thisnereyi gösteriyor -> şuanlık hiçbir yeri
        //bind yapmalıyımki bir yeri göstersin
        //alttaki render(){ içindeki this.name bir yeri gösterir çünkü render fonksiyounu State diye bir class içinde
        //ve Components clasından miras almıştır
        //bind(bağlama yaparak yeni oluşturdugum fonksyionun içindeki this kullanmak için bind yapmalıyım)
        //aşagıda render fonk içinde bu fonksiyona gönderme yapılan yerde
       // this.onClickEvent.bind(this)
        //yazmalıyım this State objesini gösteriyor ve render() içindeki thisle aynı oldu

        //Bind işlemini constractur içinde de yapılabilir
    }

    //Error function bind işlemini kendi otomatik yapıyor
    onClickEventErrorFunctionWith=(e) => {
        console.log(this); //undifined veriyor bu thisnereyi gösteriyor -> şuanlık hiçbir yeri
    }
    onClickEventErrorFunctionWithParameter=(number,e) => {
        console.log(number); //undifined veriyor bu thisnereyi gösteriyor -> şuanlık hiçbir yeri
    }



    static defaultProps ={
        name:"Bilgi Yok",
        salary:"Bilgi Yok",
        twoname:"Bilgi Yok"
    }
    // 1. state oluşturma yöntemi
    state = {
        isVisible2:false
    }


    // 2.state oluşturma yöntemi
    constructor(props) {
        super(props);
        this.onClickEvent=this.onClickEvent.bind(this); //bind işlemidir.

        // state bir obje oldugu için buradakine örn :test diye bir çok property tanımlayabliirm
        this.state = {
            test:"Test",
            isVisible:true
        }
    }




    render() {

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

        const {name,department,salary}=this.props;
        // const topla=(sayi1,sayi2)=>{
        //     return sayi1+sayi2;
        // }
        //this.stateden bu değişkenleri çekmeliyim
        const {isVisible,isVisible2} =this.state;

        return (
            <div>

            <p>Bu bir stateobjesidir ve içindeki test propertyni yazdırılmasıdır=>{this.state.test}</p>
             <div className="col-md-8 mb-4">
                 {
                     //isVisible true ise card body gösterilecek değilse null
                     isVisible ?  <div className="car-body">
                         <p className="card-text">
                             {/*{topla(2,4)}*/}

                         </p>
                         <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>{name}</h4>
                         <hr/>
                         <h4 className="d-inline" onClick={this.onClickEventErrorFunctionWith}>Constructor bind :{name}</h4>
                         <hr/>
                         <h4 className="d-inline" onClick={this.onClickEventErrorFunctionWithParameter.bind(this,34)}>Constructor bind :{name}</h4>
                         <i className="far fa fa-trash"></i>
                     </div> : null
                 }
                 {
                     //isVisible true ise card body gösterilecek değilse null
                     isVisible2 ?  <div className="car-body">
                         <p className="card-text">
                             {/*{topla(23,11)}*/}
                         </p>
                     </div> : null
                 }

             </div>
            </div>
        );
    }
}

export default State;