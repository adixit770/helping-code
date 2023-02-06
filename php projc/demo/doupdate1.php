<?php
include 'datac.php';
$name = $_POST['name'];
$city = $_POST['city'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$person_id = $_POST['person_id'];

if ($name !== "" && $email !== "")
{

    $data = " update profile set person_name='$name',person_city='$city',person_mobile='$mobile',person_email='$email' where person_id='$person_id'";

    if ($conn->query($data))

    header("location:show.php");
    else
    {

        echo "failed";
        header("location:show.php");
    }

}
else
{
    $msg = "Field can not be Empty";
    header("location:show.php");

}

?>
