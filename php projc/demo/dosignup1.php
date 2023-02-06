<?php
include 'datac.php';
$name = $_POST['name'];
$city = $_POST['city'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['conf_password'];

if ($name !== "" && $email !== "")
{
    if ($password === $confirm_password)
    {
        $view = " insert into profile(person_name,person_city,person_mobile,person_email,person_password) Values('$name','$city','$mobile','$email','$password')";
        if ($conn->query($view)) header("location:index.php");
        else echo "failed";
    }
    else
    {
        $msg = "password not match!";
        header("location:index.php?msg=$msg&name=$name&city=$city&mobile=$mobile&email=$email");
    }

}
else
{
    $msg = "field can not be empty";
    header("location:index.php?msg=$msg&name=$name&city=$city&mobile=$mobile&email=$email");

}

?>
