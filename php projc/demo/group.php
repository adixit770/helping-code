<?php
session_start();
?>
  <?php
include 'datac.php';
$group=$_POST['group'];
$person_id=$_SESSION['person_id'];

    $view = "insert into groupby(group_name,person_id)Values('$group','$person_id')";
    
    if ($conn->query($view)) 
      
      header("location:profile.php");
    
    else echo "failed";


?>
