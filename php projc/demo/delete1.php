<?php
include 'datac.php';
$person_id = $_GET['person_id'];
$view = "delete from profile where person_id='$person_id'";
$result = $conn->query($view);
header("location:show.php");
?>
