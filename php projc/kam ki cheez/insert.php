<?php

include 'dbconnection.php';
$user_name="aman";
$user_mobile="234567890";
$a=" insert into entry(user_name,user_mobile)values('$user_name','$user_mobile')";
if ($conn->query($a)===true)
  echo "success";
else
  echo "failed";
?>
