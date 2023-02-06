<?php
include 'datac.php';
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$add_id = $_POST['add_id'];

if ($name !== "" && $email !== "")
{

    $data = " update contacts set add_name='$name',add_mobile='$mobile',add_email='$email' where add_id='$add_id'";

    if ($conn->query($data))

    header("location:profile.php");
    else
    {

        echo "failed";
        header("location:profile.php");
    }

}
else
{
    $msg = "Field can not be Empty";
    header("location:profile.php");

}

?>
