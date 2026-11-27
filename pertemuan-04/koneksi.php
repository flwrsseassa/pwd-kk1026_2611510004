<?php
// P11: Berkas koneksi PHP-MySQL (MySQLi) yang dapat digunakan kembali.
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_pwd_2611510004";

$koneksi = mysqli_connect($host, $user, $pass, $db);

// Penanganan kegagalan koneksi sesuai indikator P11.
if (!$koneksi) {
  die("Koneksi database gagal: " . mysqli_connect_error());
}

//mysqli_set_charset($koneksi, "utf8mb4");
