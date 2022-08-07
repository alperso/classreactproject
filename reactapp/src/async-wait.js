// Async-wait fonksiyonu
const axios =require('axios');
// console.log(axios);
getData=async ()=>{
    await axios.get("http://localhost:30402")
        .then((responsive)=>{
            console.log(responsive);
        })
        .catch((e)=>console.log(e))
};
//getData();
//console.log(("Verileri çekmden Burayı asla gösterme"));

//node async-wait.js ile terminalden bu sayfayı çağırdıgımda koda göre önce rest den veriyi çekip sonra consolda
//Verileri çekmeden Burayı gösterme yazması lazım ama olmuyor önce consolu bastı sorna veriyi cekti
//bunu nasıl çözeceğim?
// ASNYC - AWAİT  ile bunu çözerim

getShow= async ()=>{
    await getData(); //burası bitmeden aşağı geçmedi
    console.log(("Verileri çekmden Burayı asla gösterme"));
}
getShow();

//Şimdi oldu
//ASYNC await koydugumuz yer kod blogunu orada durdurup bitmesini bekliyor

