<?php
session_start();
unset($_SESSION["person_id"]);
// destroy($_SESSION["person_id"]);
header("location:index.php");
?>
