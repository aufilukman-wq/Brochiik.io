<?php

require_once "koneksi.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: kontak.html");
    exit;
}

$nama = trim($_POST["nama"] ?? "");
$email = trim($_POST["email"] ?? "");
$pesan = trim($_POST["pesan"] ?? "");

if ($nama === "" || $email === "" || $pesan === "") {
    header("Location: kontak.html?status=gagal");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: kontak.html?status=gagal");
    exit;
}

$sql = "INSERT INTO pesan (nama, email, pesan) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    header("Location: kontak.html?status=gagal");
    exit;
}

$stmt->bind_param("sss", $nama, $email, $pesan);

if ($stmt->execute()) {

    $stmt->close();
    $conn->close();

    header("Location: kontak.html?status=sukses");
    exit;
}

$stmt->close();
$conn->close();

header("Location: kontak.html?status=gagal");
exit;

?>