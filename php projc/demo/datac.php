<?php
$servername = "localhost";
//by default username=root and password=""
//error 404 means worng ulr
//error 500 means mistake in code
$username = "root";
$password = "";
$dbname = "directory";

// Create connection
// mysqli is a class
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
    //die= is work for print and terminated
    
}

?>
