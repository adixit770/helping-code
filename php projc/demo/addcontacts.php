<?php
session_start();
?>
	<?php
include 'datac.php';
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];

$person_id = $_SESSION['person_id'];


if ($name !== "" && $email !== "")
{
    $view = "insert into contacts(add_name,add_mobile,add_email,person_id) Values('$name','$mobile','$email','$person_id')";
    if ($conn->query($view)) header("location:profile.php");
    else echo "failed";
}
else
{
    $msg = "field can not be empty";
    header("location:profile.php?msg=$msg&name=$name&mobile=$mobile&email=$email");

}

?>
