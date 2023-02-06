<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "country";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
    //die= is work for print and terminated
    
}

?>
