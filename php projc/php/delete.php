<?php
include 'dbconnection.php';
if (!isset($_GET['user_id'])) {
  header("location:view.php");
}
else
{
  $user_id =$_GET['user_id'];
  $view= "DELETE FROM entry WHERE user_id='$user_id'";
  $result=$conn->query($view);
  header("location:view.php");
  
}


?>