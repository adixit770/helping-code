<?php
include 'dbconnection.php';
$name=$_POST['name'];
$city=$_POST['city'];
$mobile=$_POST['mobile'];
$email=$_POST['email'];
$salary=$_POST['salary'];
$password=$_POST['password'];
$confirm_password=$_POST['confirm_password'];

if($name!==""&&$email!=="")
{
	if($password===$confirm_password)
	{
	$data=" insert into entry(user_name,user_city,user_mobile,user_email,user_salary,user_password) Values ('$name','$city','$mobile','$email','$salary','$password')";
		if ($conn->query($data))
  			header("location:index.php");
		else
  			echo "failed";
	}
	else
	{
		$msg="password not match!";
		header("location:index.php?msg=$msg&name=$name&city=$city&mobile=$mobile&email=$email");
	}
	
}
else
{
	$msg="field can not be empty";
	header("location:index.php?msg=$msg&name=$name&city=$city&mobile=$mobile&email=$email");
	
}

?>