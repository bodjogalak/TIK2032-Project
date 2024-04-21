const nama = "jeremia pasca";
let usia = 20;

console.log("nama saya adalah ", nama, "usia saya adalah", usia);
function generateBiodata() {
  console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}

console.log(nama);

console.log(usia);

function bukagalleryhtml() {
  window.open("gunung2.jpg");
}
function gambarjeremia2() {
  window.open("jeremia2.jpg");
}
var datadua = document.querySelector(".gmbr1");
// console.log(document.getElementsByClass(".gmbr1"));
document.getElementsByClass(".gmbr1").window.addEventListener('click', function (gambargallery1) {
  window.open("jeremia3.jpg");
});

function gambargallery2() {
 window.open("gunung.jpg");
}

function gambargallery3() {
window.open("latihan.jpg");
} 
   // AJAX
 let xhr = new XMLHttpRequest();
console.time("timeout");
let data;
let datas;
let x[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
datas = document.getElementsByTagName("body")[x];
  // looping buat komputer lokal untuk Get ke server
//for (let i = 20; i >= 0; i++) {
// for (let i = 0; i < 3; i++) {
//setTimeout(() => {
  komputerlokal();

  // console.timeEnd("timeout");
// },50000);       
// }
function komputerlokal() {
 // ini 'GET' bru situs website sebenarnya
  xhr.open('GET','https://api.github.com/users/petanikode');
  xhr.send();
      // this.status == 200
  if (data == undefined && datas != undefined){
  console.log("reply from server 200");
  window.addEventListener("load", () => {
    document.querySelector(".load").classList.add("load--hidden");
  });
   // setTimeout(() => {
      xhr.onload = () => {
        data = JSON.parse(xhr.response);
        console.log(data);
      };
  //  }, 5000);
  }  else {
    console.log("failed to connect server");
    console.log(this.readyState); // xhr.status

    console.log(data);
   // xhr.onload = () => {
     //   let data = JSON.parse(xhr.response);
       // console.log(data);
     // };
   // console.log(this.responseText);
  }
 // xhr.send();
}  
 // console.timeEnd("timeout");
