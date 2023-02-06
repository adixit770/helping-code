<?php
include 'datac.php';

$add_id = $_GET['add_id'];
$view = "delete from contacts where add_id='$add_id'";
$result = $conn->query($view);
header("location:profile.php");

?>
