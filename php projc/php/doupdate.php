<?php
include 'dbconnection.php';
$name=$_POST['name'];
$city=$_POST['city'];
$mobile=$_POST['mobile'];
$email=$_POST['email'];
$salary=$_POST['salary'];
$user_id=$_POST['user_id'];

if($name!==""&&$email!=="")
{
	
	$data=" update entry set user_name='$name',user_city='$city',user_mobile='$mobile',user_email='$email',user_salary='$salary' where user_id='$user_id'";
	
	// die($view);
	
		if ($conn->query($data))

  		header("location:view.php");
		else
  			{

  				echo "failed";
  		header("location:view.php");
	}
	
	
}
else
{
	$msg="Field can not be Empty";
	header("location:view.php");
	
}

?>