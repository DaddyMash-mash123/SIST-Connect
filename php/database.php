<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$host = "sql208.infinityfree.com";
$username = "if0_43155097";
$password = "sistconnect2026";
$database = "if0_43155097_sist_connect";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

$conn->set_charset("utf8mb4");

?>