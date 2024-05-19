<?php

 // koneksi ke database
$koneksi = mysqli_connect("127.0.0.1:3306", "root", "" , "berita");




   // melakukan perintah querry pda database
$hasil = mysqli_query($koneksi, "SELECT * FROM home");

$data = mysqli_fetch_assoc($hasil);
if ($hasil) {

//echo "Isi data mahasiswa: " . "<br>";
    
  // fetch atau mengambil isi datanya dri database
while ($isidatanya = mysqli_fetch_assoc($hasil)) {
  
    var_dump($isidatanya);
     echo "<br>";

    

   }
 //  echo " " . "<br>";

 //  echo " " . "<br>";

 //  echo " " . "<br>";

// echo "ini adalah batas header";

    // jika gagal mendapatkan data dri database
} else if(!$hasil) {

echo mysqli_error($hasil);

}

 
?>
