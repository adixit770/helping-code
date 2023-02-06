<?php
session_start();
if (isset($_SESSION['person_id']))
{
    header("Location: profile.php");
}
?>

<?php
include 'datac.php';
$email = $_POST['email'];
$password = $_POST['password'];

if ($email !== "")
{

    $view = "select * from profile where person_email='$email' AND person_password='$password'";
    $result = mysqli_query($conn, $view);
    $check = mysqli_fetch_array($result);
    if (isset($check))
    {

        $_SESSION['person_id'] = "$check[0]";

        echo "success";
        header("location:profile.php?email=$email&person_id=$person_id");
    }
    else
    {

        $msg = "invalid email or password";
        header("location:index.php?msg=$msg");
    }

}
else
{
    $msg = "field can not be empty";
    header("location:index.php?msg=$msg&email=$email");

}

?>
