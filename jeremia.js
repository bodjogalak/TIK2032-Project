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
function gambargallery1() {
  window.open("jeremia3.jpg");
}

function gambargallery2() {
 window.open("gunung.jpg");
}

function gambargallery3() {
window.open("latihan.jpg");
} 
   // AJAX
let xhr = new XMLHttpRequest();
console.time("timeout");

  // looping buat komputer lokal untuk Get ke server
//for (let i = 20; i >= 0; i++) {
for (let i = 0; i < 3; i++) {
setTimeout(() => {
  komputerlokal();

   console.timeEnd("timeout");
 },50000);       
}
function komputerlokal() {
  xhr.open('GET','https://regres.in/api/users');
  

  if (xhr.status == 200) {
  console.log("reply from server 200");
    setTimeout(() => {
      xhr.onload = () => {
        //let data = JSON.parse(xhr.response);
        console.log(xhr.response);
      };
    }, 5000);
  } else {
    console.log("failed to connect server");
  }
  xhr.send();
}  
 // console.timeEnd("timeout");
